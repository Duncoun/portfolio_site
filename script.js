// ==========================================================================
//  Logique de l'explorateur — tu n'as normalement jamais besoin de toucher
//  à ce fichier. Les projets se gèrent dans data.js.
// ==========================================================================

(function () {
  "use strict";

  const FOLDERS = [
    { id: "videography", label: "Videography" },
    { id: "photography", label: "Photography" }
  ];

  // "Length" est le libellé utilisé par l'explorateur Windows pour la durée
  const COLUMNS = [
    { key: "name", label: "Name" },
    { key: "client", label: "Client" },
    { key: "role", label: "Role" },
    { key: "duration", label: "Length" },
    { key: "date", label: "Date" }
  ];

  const state = {
    expanded: { videography: false, photography: false },
    sort: { key: "date", dir: "desc" }
  };

  const explorer = document.getElementById("explorer");
  const thumb = document.getElementById("thumb");
  const player = document.getElementById("player");
  const playerFrame = document.getElementById("playerFrame");
  const playerCaption = document.getElementById("playerCaption");
  const viewer = document.getElementById("viewer");
  const viewerImg = document.getElementById("viewerImg");
  const viewerCaption = document.getElementById("viewerCaption");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let gallery = null;
  let galleryIndex = 0;

  // ---- Helpers -----------------------------------------------------------

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function toSeconds(d) {
    if (!d) return 0;
    return d.split(":").reduce((acc, v) => acc * 60 + Number(v), 0);
  }

  function fmtDate(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return d + "/" + m + "/" + y;
  }

  function sortValue(p, key) {
    if (key === "date") return p.date || "";
    if (key === "duration") return p.photos ? p.photos.length : toSeconds(p.duration);
    return String(p[key] || "").toLowerCase();
  }

  function sortedProjects(folderId) {
    const arr = (PROJECTS[folderId] || []).slice();
    const { key, dir } = state.sort;
    arr.sort(function (a, b) {
      const va = sortValue(a, key);
      const vb = sortValue(b, key);
      const c = va < vb ? -1 : va > vb ? 1 : 0;
      return dir === "asc" ? c : -c;
    });
    return arr;
  }

  // ---- Rendu -------------------------------------------------------------

  function render() {
    let html = '<div class="row header">';
    COLUMNS.forEach(function (c) {
      const active = state.sort.key === c.key;
      const arrow = active ? (state.sort.dir === "asc" ? "↑" : "↓") : "";
      html +=
        '<span class="cell ' + c.key + (active ? " active" : "") + '" data-sort="' + c.key + '">' +
        c.label + (arrow ? '<span class="arrow">' + arrow + "</span>" : "") +
        "</span>";
    });
    html += "</div>";

    FOLDERS.forEach(function (f) {
      const items = PROJECTS[f.id] || [];
      const open = state.expanded[f.id];
      html +=
        '<div class="row folder" data-folder="' + f.id + '">' +
        '<span class="cell name"><span class="caret">' + (open ? "▾" : "▸") + "</span>" +
        f.label +
        '<span class="count">' + items.length + " item" + (items.length === 1 ? "" : "s") + "</span></span>" +
        "</div>";

      if (!open) return;

      if (!items.length) {
        html +=
          '<div class="row empty"><span class="cell name">This folder is empty.</span></div>';
        return;
      }

      sortedProjects(f.id).forEach(function (p) {
        const idx = items.indexOf(p);
        const dot = p.name ? p.name.lastIndexOf(".") : -1;
        const nameHtml =
          dot > 0
            ? esc(p.name.slice(0, dot)) + '<span class="ext">' + esc(p.name.slice(dot)) + "</span>"
            : esc(p.name);
        const dur = p.photos ? p.photos.length + " photos" : p.duration || "";
        html +=
          '<div class="row project" data-folder="' + f.id + '" data-idx="' + idx + '">' +
          '<span class="cell name">' + nameHtml + "</span>" +
          '<span class="cell client">' + esc(p.client) + "</span>" +
          '<span class="cell role muted">' + esc(p.role) + "</span>" +
          '<span class="cell duration">' + esc(dur) + "</span>" +
          '<span class="cell date muted">' + fmtDate(p.date) + "</span>" +
          "</div>";
      });
    });

    explorer.innerHTML = html;
  }

  function getProject(row) {
    return PROJECTS[row.dataset.folder][Number(row.dataset.idx)];
  }

  // ---- Miniature au survol -----------------------------------------------

  function showThumb(p) {
    const src = p.youtube
      ? "https://i.ytimg.com/vi/" + p.youtube + "/hqdefault.jpg"
      : p.photos && p.photos[0];
    if (!src) return hideThumb();
    if (thumb.getAttribute("src") !== src) thumb.setAttribute("src", src);
    thumb.classList.add("visible");
  }

  function hideThumb() {
    thumb.classList.remove("visible");
  }

  // ---- Lecteur vidéo ------------------------------------------------------

  function openVideo(p) {
    playerFrame.src =
      "https://www.youtube-nocookie.com/embed/" + p.youtube + "?autoplay=1&rel=0";
    playerCaption.textContent = p.name + " — " + p.client;
    player.hidden = false;
    document.body.classList.add("locked");
    hideThumb();
  }

  // ---- Visionneuse photo --------------------------------------------------

  function openGallery(p) {
    gallery = p;
    galleryIndex = 0;
    updateViewer();
    viewer.hidden = false;
    document.body.classList.add("locked");
    hideThumb();
  }

  function updateViewer() {
    viewerImg.src = gallery.photos[galleryIndex];
    viewerCaption.textContent =
      gallery.name + " — " + (galleryIndex + 1) + " / " + gallery.photos.length;
    const single = gallery.photos.length < 2;
    prevBtn.hidden = single;
    nextBtn.hidden = single;
  }

  function stepGallery(delta) {
    if (!gallery) return;
    const n = gallery.photos.length;
    galleryIndex = (galleryIndex + delta + n) % n;
    updateViewer();
  }

  function closeOverlays() {
    player.hidden = true;
    viewer.hidden = true;
    playerFrame.src = "";
    viewerImg.src = "";
    gallery = null;
    document.body.classList.remove("locked");
  }

  // ---- Événements ---------------------------------------------------------

  explorer.addEventListener("click", function (e) {
    const sortCell = e.target.closest("[data-sort]");
    if (sortCell) {
      const key = sortCell.dataset.sort;
      if (state.sort.key === key) {
        state.sort.dir = state.sort.dir === "asc" ? "desc" : "asc";
      } else {
        state.sort = { key: key, dir: "asc" };
      }
      render();
      return;
    }

    const folderRow = e.target.closest(".row.folder");
    if (folderRow) {
      const id = folderRow.dataset.folder;
      state.expanded[id] = !state.expanded[id];
      render();
      return;
    }

    const projRow = e.target.closest(".row.project");
    if (projRow) {
      const p = getProject(projRow);
      if (p.youtube) openVideo(p);
      else if (p.photos && p.photos.length) openGallery(p);
    }
  });

  explorer.addEventListener("mouseover", function (e) {
    const row = e.target.closest(".row.project");
    if (row) showThumb(getProject(row));
    else hideThumb();
  });

  explorer.addEventListener("mouseleave", hideThumb);

  [player, viewer].forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.closest("[data-close]")) closeOverlays();
    });
  });

  prevBtn.addEventListener("click", function () { stepGallery(-1); });
  nextBtn.addEventListener("click", function () { stepGallery(1); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeOverlays();
    if (!viewer.hidden) {
      if (e.key === "ArrowLeft") stepGallery(-1);
      if (e.key === "ArrowRight") stepGallery(1);
    }
  });

  // ---- Init ---------------------------------------------------------------

  render();
})();
