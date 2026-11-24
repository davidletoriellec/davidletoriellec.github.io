# ⚡ LaboSim – laboratoire d'électricité virtuel (v3.3)

Simulateur de travaux pratiques d'électricité qui tourne dans un navigateur, sans installation ni serveur.
Les appareils sont dessinés comme en vrai et l'élève les **câble lui-même** avec des cordons banane ou BNC.
Une notice intégrée (bouton « Notice ») explique le câblage de chaque appareil.

## Matériel disponible

| Menu | Appareils |
|---|---|
| Alimentations | continue 0–30 V **avec limite de courant (CV / CC)** · continue **double** 2×(0–30 V), voies indépendantes ·  alternative 0–230 V~ (tension et fréquence réglables) · triphasée 400 V (N, L1, L2, L3) · GBF 0–12 V, 10 Hz–1 MHz (sinus, carré, triangle, offset) |
| Charges | résistance (code couleur) · ampoule (puissance et tension nominales) · lampe à LED · lampe fluocompacte · condensateur · bobine (avec résistance interne) · moteur à courant continu · moteur monophasé (cos φ 0,82) · moteur asynchrone triphasé 1,5 kW (cos φ 0,84, étoile/triangle) · curseur de charge des moteurs alternatifs de l'à-vide à 1,2 × In · caisse de charge 0–4 kW (bornes M1/M2 mono ou continu et L1/L2/L3 tri, paliers de 200 W) |
| Commandes | interrupteur · commutateur 2 voies (3 bornes) · relais (bobine et contact visibles) · contacteur (2 contacts NO) |
| Appareils de mesure | multimètre numérique (A/V, DC ou AC efficace) · ampèremètre et voltmètre à aiguille (calibres) · wattmètre POWER8000 (W, VAr, VA, PF, V, A) · pince ampèremétrique PROVA 21 (A, W, VAr, VA, PF, V) · sonde de tension (÷10, ÷100) · sonde de courant (÷10, ÷100, ÷300) · compte-tours · couple-mètre · oscilloscope 2 voies (mode XY, curseurs) |
| Repérage | rectangles pointillés · textes |

Autres fonctions : unités au choix pour chaque réglage (mΩ…MΩ, pF…mF, µH…H, Hz…MHz, mV…kV, mW…kW), câbles banane/BNC/coaxiaux
à trois tracés au choix (courbe à points, droit, orthogonal), 9 couleurs de câbles, « clac » des relais et contacteurs, oscilloscope avec écran agrandi et curseurs (ΔT, 1/ΔT, ΔV, valeur max, déphasage),
export PDF (NOM, PRÉNOM, GROUPE, RESSOURCE, notes libres) du schéma et de l'écran de l'oscilloscope, sauvegarde et ouverture des montages (fichier `.json`), étiquettes (TP ELEN, TP ENER, TP1, TP2, Projet…) avec couleurs et filtre du menu de matériel, plan de travail de 4000 × 3000 avec zoom et déplacement, appareils à aiguille à deux échelles (100 et 30).

## Circuits intégrés et boîtes noires

- **NE555, AOP LF356, comparateur LM311** : dès qu'un de ces circuits est présent, la simulation passe en **mode temporel** (schéma d'Euler implicite, itération pour les saturations et les bascules). Les signaux de l'oscilloscope sont calculés à partir de la mise sous tension ; les multimètres donnent la moyenne (DC) ou l'efficace de la composante alternative (AC). Moteurs, relais, wattmètre, pinces et sondes ne sont pas pris en charge dans ce mode.
- **Boîtes noires** : le professeur définit le contenu soit en **assemblant de vrais composants** (résistances, condensateurs, bobines câblés sur le plan, puis menu « Créer un dipôle / quadripôle depuis un montage… » et clic sur les bornes A, B ou E+, E−, S+, S−), soit par une netlist (`R1 A n1 1k`, `C1 n1 B 100n`, `L`, `W` = fil, `E` = source commandée) ou un modèle prêt à l'emploi ; l'élève ne voit que le nom (BN1, BN2…) et les bornes. Le contenu peut aussi être **construit avec de vrais composants** : on pose et câble des résistances, condensateurs et bobines sur le plan, puis on choisit « Créer un dipôle / quadripôle depuis un montage… » et on clique les bornes dans l'ordre demandé ; le montage est converti en netlist et remplacé par la boîte noire. Le contenu est enregistré de façon masquée (base64 + XOR) dans le fichier de montage et protégé par un code à l'écran : c'est une protection de commodité, pas un chiffrement.

## Arduino Uno programmable (v3.0)

- **Carte Arduino Uno** (menu « Arduino ») : D0–D13, A0–A5, 5 V, 3,3 V, GND câblables ; alimentée par l'USB ; LED « L » sur la broche 13. Avec un **potentiomètre** et un **bouton poussoir** (maintenir le clic).
- **Éditeur de code** (volet à droite) avec **moniteur série**, exemples (Blink, veilleuse LDR, radar HC-SR04, variateur PWM, bouton + compteur, feu tricolore) et erreurs signalées avec le numéro de ligne.
- Langage : sous-ensemble d'Arduino/C++ compilé vers JavaScript (`js/arduino.js`) : `setup`/`loop`, fonctions, variables globales/locales, tableaux 1-2 D, `String`, `if`/`for`/`while`/`do`/`switch`, `#define`, `pinMode`, `digitalWrite/Read`, `analogRead/Write`, `delay`, `delayMicroseconds`, `millis`, `micros`, `pulseIn`, `tone`, `map`, `constrain`, `random`, `Serial.print/println/read/parseInt/available…`. Types C respectés (int 16 bits, long 32 bits, division entière, débordements).
- Non géré : `#include`/bibliothèques, struct/class, pointeurs, interruptions, I²C/SPI, Servo.
- Le programme s'exécute en **temps réel** (vitesse ×0,1 à ×10, pause, reset), couplé au solveur temporel : sorties 5 V (≈ 25 Ω), entrées haute impédance, convertisseur 10 bits (0–5 V), PWM 490/980 Hz, `pulseIn` exact pour le HC-SR04. Le temps du programme est virtuel (aucun blocage possible, même avec `while(1){}`).

## Étiquettes et filtre du matériel

Le bouton 🏷 du menu ouvre la gestion des étiquettes : créer, renommer, supprimer, cocher les appareils concernés. La liste déroulante du menu
affiche tout le matériel, une étiquette ou « Sans étiquette ». Chaque étiquette a une couleur : un petit point coloré apparaît dans le menu à côté des appareils concernés. La configuration est mémorisée dans le navigateur et peut être exportée/importée.
Pour un site GitHub Pages, le fichier `labosim-tags.json` (à côté de `index.html`) est chargé au démarrage si aucune configuration locale n'existe :
format `{"tags":["TP1","TP2"],"colors":{"TP1":"#43a047","TP2":"#1e88e5"},"map":{"res":["TP1"],"amp:a":["TP2"]}}` (`:a` = appareil à aiguille).

Plusieurs fichiers peuvent être combinés : « Exporter un fichier par étiquette » télécharge un fichier par étiquette, nommé d'après elle (`tp-elen.json`, `tp1.json`…), et un `labosim-tags-index.json`. Dépose les fichiers dans un dossier `tags/` et l'index à la racine :

```
index.html
labosim-tags-index.json     {"files":["tags/tp-elen.json","tags/tp1.json"]}
tags/tp-elen.json
tags/tp1.json
```

Le site fusionne les fichiers listés (étiquettes de même nom regroupées, appareils additionnés).

## Lancer en local

Ouvrir `index.html` dans un navigateur. Pour un serveur local : `npm start`.

## Tests

```bash
npm test
```

Les tests (Node ≥ 16, sans dépendance) vérifient le solveur, le compilateur Arduino (types, débordements, Serial, temps virtuel, erreurs) et l'exécution couplée au circuit (Blink, LDR, HC-SR04, PWM, bouton) : loi d'Ohm, filtre RC, puissances P/Q/S de l'POWER8000 (câblages 3 et 4 fils),
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
- Moteurs alternatifs : l'admittance varie linéairement de l'à-vide (courant et cos φ à vide réglables) à la charge nominale, extrapolée jusqu'à 1,2 × In ; la vitesse (glissement) et le couple suivent.
- Moteur CC : modèle statique (résistance d'induit, force contre-électromotrice, frottements, couple résistant) résolu par itération ; en alternatif il se comporte comme R + L. Moteur monophasé et lampes LED/fluocompactes : impédances équivalentes déduites de la puissance et du cos φ.
- Relais et contacteurs : le contact colle à 80 % de la tension nominale de la bobine et se relâche sous 30 % (itération jusqu'à stabilité).
- Sources alternatives de même fréquence : supposées en phase.
- L'export PDF est écrit sans bibliothèque (image JPEG du schéma + texte).

Organisation : `js/app.js` (solveur, dessin, interactions, PDF), `js/arduino.js` (compilateur + moteur Arduino), `css/style.css`, `index.html`, `tests/`.

## Pistes d'évolution

NE555 et amplificateurs opérationnels (nécessitent une simulation temporelle non linéaire), transformateur, rhéostat, diodes et LED.

## Licence

MIT – voir `LICENSE`.

## Nouveautés v3.3
Fusibles du multimètre numérique (3 A / 16 A, bouton « Changer le fusible »), aiguille amortie sur les appareils analogiques, et nouveaux composants : transistors bipolaires et de puissance, MOSFET, HEMT, triac, optotriac, haut-parleur, microphone. Voir `CHANGELOG.md`.
