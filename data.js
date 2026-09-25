// ==========================================================================
//  TES PROJETS — c'est le SEUL fichier à modifier pour mettre à jour le site.
//
//  Pour une vidéo :
//    name     : nom de fichier affiché (ex: "mon_projet.mp4")
//    client   : nom du client
//    role     : ton rôle sur le projet
//    duration : durée de la vidéo, format "M:SS" ou "H:MM:SS"
//    date     : date au format AAAA-MM-JJ (sert au tri chronologique)
//    youtube  : l'identifiant YouTube de la vidéo — c'est la partie après
//               "watch?v=" dans l'URL. Ex : pour
//               https://www.youtube.com/watch?v=KtNW8fH7i0s
//               l'identifiant est "KtNW8fH7i0s".
//               (La miniature est récupérée automatiquement depuis YouTube.)
//
//  Pour une série photo :
//    name   : nom de la série
//    client : nom du client
//    role   : ton rôle
//    date   : date au format AAAA-MM-JJ
//    photos : liste des chemins vers les images, à placer dans le
//             dossier photos/ (ex: "photos/ma_serie/01.jpg")
// ==========================================================================

const PROJECTS = {

  videography: [
    {
      name: "cancer_nofilter.mp4",
      client: "HBR Production LLC",
      role: "Colorist",
      duration: "1:01",
      date: "2019-07-08",
      youtube: "0pge2tVstQ8"
    },
    {
      name: "copicat.mp4",
      client: "Cindy Sanyiu",
      role: "Colorist",
      duration: "2:59",
      date: "2019-06-11",
      youtube: "oyyRPdd1uIc"
    },
    {
      name: "interviews_for_brosky.mp4",
      client: "Brosky Media",
      role: "Colorist",
      duration: "0:27",
      date: "2017-04-25",
      youtube: "RzqqL_LFeas"
    },
    {
      name: "the_party_follows_me.mp4",
      client: "The Hollywood Summer Tour",
      role: "Colorist",
      duration: "4:18",
      date: "2017-07-11",
      youtube: "_NKy6I7ZSt8"
    },
    {
      name: "startup_interview.mp4",
      client: "Intuit",
      role: "Videographer",
      duration: "0:46",
      date: "2017-04-25",
      youtube: "kpUJyOy8wJE"
    },
    {
      name: "bill.mp4",
      client: "ESRA",
      role: "Assistant Editor",
      duration: "11:52",
      date: "2017-08-07",
      youtube: "bWGENGMLsmE"
    },
    {
      name: "social_ads_marco.mp4",
      client: "Marco Vasco",
      role: "Editor",
      duration: "2:00",
      date: "2017-10-11",
      youtube: "-XRgGxRRK0g"
    },
    {
      name: "je_nai_pas_lhabitude.mp4",
      client: "Azadé Glamour",
      role: "Editor",
      duration: "3:53",
      date: "2023-12-22",
      youtube: "UBv69TW1Icw"
    },
    {
      name: "submariner_live_at_supersonic.mp4",
      client: "Submariner",
      role: "Videographer",
      duration: "43:14",
      date: "2025-07-11",
      youtube: "mR5UQRGyWBg"
    },
    {
      name: "winter_in_paris.mp4",
      client: "Personal project",
      role: "Videographer",
      duration: "3:08",
      date: "2024-01-06",
      youtube: "zOWN-EP30XQ"
    },
    {
      name: "january_24_paris_amsterdam.mp4",
      client: "Personal project",
      role: "Videographer",
      duration: "2:06",
      date: "2024-05-09",
      youtube: "L7D-HPjPTtE"
    },
    {
      name: "antibes_march_24.mp4",
      client: "Personal project",
      role: "Videographer",
      duration: "1:40",
      date: "2024-11-04",
      youtube: "DSN9F0YQxSo"
    },
    {
      name: "iceland_2024.mp4",
      client: "Personal project",
      role: "Videographer",
      duration: "3:44",
      date: "2025-05-06",
      youtube: "KtNW8fH7i0s"
    },
    {
      name: "sevilla_2024.mp4",
      client: "Personal project",
      role: "Videographer",
      duration: "3:02",
      date: "2026-04-25",
      youtube: "DrXZTml-dUM"
    },
    {
      name: "pharmasynergy_paris.mp4",
      client: "Lynx2Market",
      role: "Videographer",
      duration: "2:12",
      date: "2024-09-23",
      youtube: "T4AwcnlF5Gk"
    },
    {
      name: "apprendre_le_japonais.mp4",
      client: "Inalco",
      role: "Videographer",
      duration: "3:29",
      date: "2026-05-01",
      youtube: "o_0q5SWIWJo"
    },
    {
      name: "testimonial_inalco.mp4",
      client: "Inalco",
      role: "Videographer",
      duration: "1:38",
      date: "2026-03-12",
      youtube: "1uVzu8nIMHY"
    },
    {
      name: "teaser_mooc_indonesien.mp4",
      client: "Inalco",
      role: "Videographer",
      duration: "1:58",
      date: "2024-11-25",
      youtube: "N0O0fumvNds"
    },
    {
      name: "jury_fica_inalco_2024.mp4",
      client: "Inalco",
      role: "Videographer",
      duration: "4:00",
      date: "2024-01-24",
      youtube: "ZxX9VWoEZeQ"
    },
    {
      name: "clip_parti_pirate_2024.mp4",
      client: "Parti Pirate",
      role: "Director",
      duration: "1:38",
      date: "2024-05-30",
      youtube: "iCw_V1B6_9Y"
    },
    {
      name: "vietnam_26.mp4",
      client: "Personal project",
      role: "Videographer",
      duration: "5:26",
      date: "2026-09-06",
      youtube: "m-D5Jbm9DU0"
    },
    {
      name: "arc_audenge.mp4",
      client: "Spond",
      role: "Videographer",
      duration: "1:03",
      date: "2021-07-31",
      youtube: "6NpzO0WMK9k"
    },
    {
      name: "canoe_avranches.mp4",
      client: "Spond",
      role: "Videographer",
      duration: "1:08",
      date: "2023-09-22",
      youtube: "_RYl6QO0i1Q"
    },
    {
      name: "rameur_mulhouse.mp4",
      client: "Spond",
      role: "Videographer",
      duration: "1:02",
      date: "2022-08-08",
      youtube: "fD_L_0D7JNY"
    },
    {
      name: "rugby_mions.mp4",
      client: "Spond",
      role: "Videographer",
      duration: "0:56",
      date: "2021-12-11",
      youtube: "j7xz6FLtZtQ"
    },
    {
      name: "mix_with_the_masters_nkf.mp4",
      client: "Rue_Boyer",
      role: "Editor",
      duration: "0:50",
      date: "2026-04-08",
      youtube: "S1dXr3bGL1A"
    }

  ],

  photography: [
    {
      name: "beauval",
      client: "Personal project",
      role: "Photographer",
      date: "2024-12-13",
      photos: [
        "photos/beauval/01.jpg",
        "photos/beauval/02.jpg",
        "photos/beauval/03.jpg",
        "photos/beauval/04.jpg"
      ]
    },
    {
      name: "deauville",
      client: "Personal project",
      role: "Photographer",
      date: "2023-11-12",
      photos: [
        "photos/deauville/01.jpg",
        "photos/deauville/02.jpg",
        "photos/deauville/03.jpg",
        "photos/deauville/04.jpg",
        "photos/deauville/05.jpg",
        "photos/deauville/06.jpg"
      ]
    },
    {
      name: "dunkerque",
      client: "Personal project",
      role: "Photographer",
      date: "2026-03-06",
      photos: [
        "photos/dunkerque/01.jpg",
        "photos/dunkerque/02.jpg"
      ]
    },
    {
      name: "musee_dorsay",
      client: "Personal project",
      role: "Photographer",
      date: "2026-05-15",
      photos: [
        "photos/musee_dorsay/01.jpg",
        "photos/musee_dorsay/02.jpg",
        "photos/musee_dorsay/03.jpg"
      ]
    },
    {
      name: "oiseaux",
      client: "Personal project",
      role: "Photographer",
      date: "2025-07-22",
      photos: [
        "photos/oiseaux/01.jpg",
        "photos/oiseaux/02.jpg",
        "photos/oiseaux/03.jpg",
        "photos/oiseaux/04.jpg",
        "photos/oiseaux/05.jpg",
        "photos/oiseaux/06.jpg"
      ]
    },
    {
      name: "eclipse",
      client: "Personal project",
      role: "Photographer",
      date: "2026-08-12",
      photos: [
        "photos/eclipse/01.jpg",
        "photos/eclipse/02.jpg",
        "photos/eclipse/03.jpg",
        "photos/eclipse/04.jpg",
        "photos/eclipse/05.jpg",
        "photos/eclipse/06.jpg",
        "photos/eclipse/07.jpg",
      ]     
    },
    {
      name: "portraits",
      client: "Personal project",
      role: "Photographer",
      date: "2024-09-01",
      photos: [
        "photos/portraits/01.jpg",
        "photos/portraits/02.jpg"
      ]
    },
    {
      name: "galicia",
      client: "Personal project",
      role: "Photographer",
      date: "2026-09-07",
      photos: [
        "photos/galicia/01.jpg",
        "photos/galicia/02.jpg",
        "photos/galicia/03.jpg",
        "photos/galicia/04.jpg"
      ]
    },
    {
      name: "saint_malo",
      client: "Personal project",
      role: "Photographer",
      date: "2023-02-25",
      photos: [
        "photos/saint_malo/01.jpg",
        "photos/saint_malo/02.jpg",
        "photos/saint_malo/03.jpg"
      ]
    }
  ]

};
