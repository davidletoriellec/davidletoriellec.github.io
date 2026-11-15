# ⚡ LaboSim – laboratoire d'électricité virtuel (v1.5)

Simulateur de travaux pratiques d'électricité qui tourne dans un navigateur, sans installation ni serveur.
Les appareils sont dessinés comme en vrai et l'élève les **câble lui-même** avec des cordons banane ou BNC.
Une notice intégrée (bouton « Notice ») explique le câblage de chaque appareil.

## Matériel disponible

| Menu | Appareils |
|---|---|
| Alimentations | continue 0–30 V · alternative 0–230 V~ (tension et fréquence réglables) · triphasée 400 V (N, L1, L2, L3) · GBF 0–12 V, 10 Hz–1 MHz (sinus, carré, triangle, offset) |
| Charges | résistance (code couleur) · ampoule (puissance et tension nominales) · lampe à LED · lampe fluocompacte · condensateur · bobine (avec résistance interne) · moteur à courant continu · moteur monophasé (cos φ 0,82) · moteur asynchrone triphasé 1,5 kW (cos φ 0,84, étoile/triangle) · caisse de charge 0–4 kW (bornes M1/M2 mono ou continu et L1/L2/L3 tri, paliers de 200 W) |
| Commandes | interrupteur · commutateur 2 voies (3 bornes) · relais (bobine et contact visibles) · contacteur (2 contacts NO) |
| Appareils de mesure | multimètre numérique (A/V, DC ou AC efficace) · ampèremètre et voltmètre à aiguille (calibres) · wattmètre IeS ISW8000 (W, VAr, VA, PF, V, A) · pince ampèremétrique PROVA 21 (A, W, VAr, VA, PF, V) · sonde de tension (÷10, ÷100) · sonde de courant (÷10, ÷100, ÷300) · compte-tours · couple-mètre · oscilloscope 2 voies (mode XY, curseurs) |
| Repérage | rectangles pointillés · textes |

Autres fonctions : unités au choix pour chaque réglage (mΩ…MΩ, pF…mF, µH…H, Hz…MHz, mV…kV, mW…kW), câbles banane/BNC/coaxiaux
à trois tracés au choix (courbe à points, droit, orthogonal), 9 couleurs de câbles, « clac » des relais et contacteurs, oscilloscope avec écran agrandi et curseurs (ΔT, 1/ΔT, ΔV, valeur max, déphasage),
export PDF (NOM, PRÉNOM, GROUPE, RESSOURCE, notes libres) du schéma et de l'écran de l'oscilloscope, sauvegarde et ouverture des montages (fichier `.json`), étiquettes (TP ELEN, TP ENER, TP1, TP2, Projet…) avec filtre du menu de matériel.

## Étiquettes et filtre du matériel

Le bouton 🏷 du menu ouvre la gestion des étiquettes : créer, renommer, supprimer, cocher les appareils concernés. La liste déroulante du menu
affiche tout le matériel, une étiquette ou « Sans étiquette ». La configuration est mémorisée dans le navigateur et peut être exportée/importée.
Pour un site GitHub Pages, le fichier `labosim-tags.json` (à côté de `index.html`) est chargé au démarrage si aucune configuration locale n'existe :
format `{"tags":["TP1","TP2"],"map":{"res":["TP1"],"amp:a":["TP2"]}}` (`:a` = appareil à aiguille).

## Lancer en local

Ouvrir `index.html` dans un navigateur. Pour un serveur local : `npm start`.

## Tests

```bash
npm test
```

Les tests (Node ≥ 16, sans dépendance) vérifient le solveur : loi d'Ohm, filtre RC, puissances P/Q/S de l'ISW8000 (câblages 3 et 4 fils),
pince, commutateur, relais et contacteur, tracés de câbles, moteurs (CC, mono, tri), caisse de charge, sondes, XY, sauvegarde, génération PDF, dessin de tous les appareils.

## Publier sur GitHub Pages

1. Pousser le dépôt sur GitHub.
2. *Settings → Pages → Source : GitHub Actions*.
3. Le workflow `.github/workflows/pages.yml` publie le site à chaque push sur `main`.

## Fonctionnement

- Analyse nodale modifiée en nombres complexes : une résolution pour le continu et une par fréquence
  (et par harmonique pour les signaux carrés et triangles, jusqu'au rang 39) ; l'oscilloscope reconstruit ensuite les signaux dans le temps.
- Chaque câble vaut 5 mΩ, ce qui permet de calculer le courant dans un câble (pinces). Au-delà de 100 A : court-circuit signalé.
- Sondes : la sonde de tension est une source commandée isolée (entrée 4 MΩ) ; la sonde de courant est commandée par le courant du câble sur lequel elle est posée. Alimentation triphasée : trois sources déphasées de 120°.
- Moteur CC : modèle statique (résistance d'induit, force contre-électromotrice, frottements, couple résistant) résolu par itération ; en alternatif il se comporte comme R + L. Moteur monophasé et lampes LED/fluocompactes : impédances équivalentes déduites de la puissance et du cos φ.
- Relais et contacteurs : le contact colle à 80 % de la tension nominale de la bobine et se relâche sous 30 % (itération jusqu'à stabilité).
- Sources alternatives de même fréquence : supposées en phase.
- L'export PDF est écrit sans bibliothèque (image JPEG du schéma + texte).

Organisation : `js/app.js` (solveur, dessin, interactions, PDF), `css/style.css`, `index.html`, `tests/`.

## Pistes d'évolution

NE555 et amplificateurs opérationnels (nécessitent une simulation temporelle non linéaire), transformateur, rhéostat, diodes et LED.

## Licence

MIT – voir `LICENSE`.
