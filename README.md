# Portfolio — Duncan Frenehard

Site portfolio une page, noir et blanc, façon explorateur de fichiers Windows.
Aucune dépendance, aucun build : du HTML, du CSS et du JavaScript purs.

## Ajouter ou modifier un projet

Tout se passe dans **`data.js`** — c'est le seul fichier à éditer.

### Ajouter une vidéo

```js
{
  name: "mon_projet.mp4",        // nom de fichier affiché
  client: "Nom du client",
  role: "Director, Editor",      // ton rôle
  duration: "3:42",              // durée ("M:SS" ou "H:MM:SS")
  date: "2026-05-10",            // AAAA-MM-JJ (sert au tri)
  youtube: "aqz-KE-bpKQ"         // ID YouTube : la partie après "watch?v=" dans l'URL
}
```

La miniature au survol est récupérée automatiquement depuis YouTube,
rien d'autre à faire.

### Ajouter une série photo

1. Crée un dossier dans `photos/` (ex : `photos/mariage_2026/`) et mets-y tes images.
2. Ajoute l'entrée dans `data.js` :

```js
{
  name: "mariage_2026",
  client: "Nom du client",
  role: "Photographer",
  date: "2026-06-20",
  photos: [
    "photos/mariage_2026/01.jpg",
    "photos/mariage_2026/02.jpg"
  ]
}
```

## Tester en local

Double-clique simplement sur `index.html` — le site fonctionne sans serveur.

## Mettre en ligne

Le site est prévu pour GitHub Pages : chaque `git push` vers la branche
principale met le site à jour automatiquement une fois Pages activé
dans les réglages du dépôt (Settings → Pages → Deploy from branch).
