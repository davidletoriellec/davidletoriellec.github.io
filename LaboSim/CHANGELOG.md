# Changelog

## v3.2.4
- Oscilloscope : quand le niveau de déclenchement est réglé hors de la courbe (aucun passage possible), la trace **défile** comme sur un vrai oscilloscope au lieu de rester figée ; elle se stabilise dès que le niveau recoupe le signal.

## v3.2.3
- Suppression de la case à cocher « Valeurs théoriques » en haut de l’écran.

## v3.2.2
- Menu de gauche : les catégories (Alimentations, Charges, Composants…) s’enroulent / se déroulent d’un clic sur leur titre ; l’état est mémorisé dans le navigateur.
- Au démarrage, l’application s’ouvre sur un plan vide (plus d’exemple par défaut) ; les exemples restent accessibles dans le menu.

## v3.2.1
- Correction : le curseur de niveau de déclenchement restait grisé après avoir décoché « Niveau auto ». Il est désormais toujours actif, et le déplacer passe automatiquement en niveau manuel (la valeur en volts s’affiche en direct).

## v3.2
- **Multimètre universel 5½ digits** (menu « Appareils de mesure ») : face avant inspirée d'un multimètre de paillasse, avec les 4 bornes du vrai appareil — **COM** (noire, commune), **V/Ω** (rouge) et deux bornes blanches **3 A** / **16 A** pour le courant — et 5 boutons cliquables : **V DC, V AC, A DC, A AC, Ω**. Tension en dérivation (10 MΩ), courant en série, **ohmmètre** (composant hors tension ; « OL » = circuit ouvert). Affichage à 5 chiffres. Fonctionne en simulation continue, temporelle et temps réel. Les anciens ampèremètres / voltmètres restent disponibles.
- **Résistance à tolérance ±5 %** : bouton « Tolérance ±5 % » dans le panneau. Actif : la valeur réelle est tirée au hasard (une fois, enregistrée avec le montage) à ±5 % de la valeur marquée — à mesurer à l'ohmmètre. Inactif : valeur exacte.
- **Oscilloscope : niveau de déclenchement (TRIGGER)** : curseur de −4 à +4 divisions sur la voie de déclenchement, avec repère de niveau à l'écran ; case « Niveau auto » (comportement précédent) cochée par défaut.
- **Alimentations continues** : bornes inversées pour coller aux appareils réels (**+ rouge à gauche, − noire à droite**), alim simple et double.

## v3.1.1
- **Rotation des composants** : bouton « ⟳ Pivoter 90° » dans le panneau ou touche **R** (composant sélectionné). Les bornes et les fils suivent ; la rotation est enregistrée avec le montage. Non disponible pour la platine, la pince et le capteur de courant à pince.

## v3.1
- **Récepteur infrarouge TSOP** : nouveau module à 3 bornes (OUT, GND, VS) avec **fréquence de porteuse réglable** (20–70 kHz, boutons 30 / 33 / 36 / 38 / 40 / 56 kHz) pour que chaque groupe ait sa propre fréquence. Il ne détecte que la lumière IR **modulée** à sa fréquence (filtre passe-bande par démodulation synchrone) : la lumière continue (soleil, ampoule), le 100 Hz du secteur et les autres fréquences sont ignorés. Sortie à l’état haut au repos, **basse** quand la porteuse est détectée (≈ 15 périodes nécessaires). Obstacle sur le faisceau et curseur « lumière ambiante parasite ». Fonctionne avec un GBF carré ou `tone()` de l’Arduino. Le phototransistor garde son rôle de comparaison : la lumière ambiante s’y ajoute au signal.
- **Alimentation continue à limite de courant** : chaque alim 0–30 V a maintenant un réglage « Limite de courant » (0,01–10 A). Au-delà, passage en régulation de courant (voyant **CC**, la tension s’effondre) ; en dessous, régulation de tension (CV). Un court-circuit d’alim n’est plus une erreur : le courant est plafonné. Valable en simulation continue, temporelle et temps réel.
- **Alimentation double 2×(0–30 V)** : deux voies indépendantes et flottantes (CH1, CH2), chacune avec sa tension et sa limite de courant, affichage de U et I par voie ; mise en série (60 V) ou alim symétrique ± par câblage.
- Les alimentations affichent maintenant la tension et le courant réellement délivrés.
- Correction : le diviseur interne du NE555 était simulé avec 5 kS au lieu de 5 kΩ (les tensions étaient justes mais le courant d’alimentation absurde).
- Exemples : télécommande IR Arduino (tone + TSOP), TSOP + GBF + oscilloscope, alim à limite de courant.
- Tests : limite de courant (CV/CC, série, symétrique, temporel), détection TSOP (fréquence, DC, ambiante, obstacle), exemples.

## v3.0.1
- Étiquettes : choisir un filtre ne fige plus la liste d'étiquettes dans le navigateur (cause des étiquettes en ligne qui n'apparaissaient pas après mise à jour). Seules les modifications faites dans la fenêtre des étiquettes sont conservées localement ; bouton « Revenir aux fichiers en ligne » ; les fichiers sont rechargés sans cache.

## v3.0 (Arduino)
- **Arduino Uno programmable** : carte câblable (D0–D13, A0–A5, 5 V, 3,3 V, GND), éditeur de code avec moniteur série, exemples. Compilateur « Arduino simplifié » (`js/arduino.js`) : types C (int 16 bits…), fonctions, tableaux, String, if/for/while/do/switch, `#define`, entrées/sorties numériques et analogiques, PWM, `delay`, `millis`, `pulseIn`, `tone`, Serial.
- Exécution en **temps réel** couplée au solveur temporel (pas variable, événements exacts pour le PWM et le HC-SR04), pause / reset / vitesse. Les valeurs des multimètres sont moyennées, l'oscilloscope affiche les derniers instants.
- Nouveaux composants : **potentiomètre** et **bouton poussoir** (maintenir le clic).
- Exemples : LED qui clignote, veilleuse (LDR), radar HC-SR04, variateur PWM, bouton + compteur, feu tricolore.

## v2.1
- Capteurs : photorésistance (LDR, 0,1 à 10 000 lx), émetteur infrarouge (LED IR) et récepteur infrarouge (phototransistor couplé aux LED IR du plan selon courant et distance, obstacle possible), capteur ultrason HC-SR04 (TRIG / ECHO, distance réglable 2 à 400 cm).
- Exemples : photorésistance, infrarouge, ultrason ; menu « Capteurs ».

## v2.0
- Étiquettes : plusieurs fichiers combinés. « Exporter un fichier par étiquette » produit un fichier nommé d'après chaque étiquette (tp-elen.json…) et un labosim-tags-index.json ; le site fusionne les fichiers listés (dossier tags/). L'ancien labosim-tags.json reste pris en charge.

## v1.9
- Nouveaux composants : diodes (1N4148, 1N4007, Zener 3,3 / 5,1 / 9,1 V) et LED de 6 couleurs (luminosité selon le courant, alerte de surintensité), en simulation temporelle.
- Platine d'essai (breadboard) : les composants (R, C, L, diodes, LED, circuits intégrés) s'enfichent par accrochage ; colonnes et rails reliés ; la platine emporte les composants enfichés.
- NE555, LF356, LM311 en boîtier DIP-8 vu de dessus (encoche, broche 1, broches nommées). Brochage réel ; les anciens montages sont migrés à l'ouverture.
- GBF : rapport cyclique pour les signaux carré et triangle.
- Oscilloscope : voies CH1 et CH2 alignées sous la base de temps.
- Boîte noire quadripôle : entrée E à gauche, sortie S à droite, deux bornes chacune.
- Exemples : LED sur platine, redressement, NE555 sur platine.

## v1.8
- Boîtes noires : création à partir d'un montage de vrais composants (résistances, condensateurs, bobines et fils) — menu « Créer un dipôle / quadripôle depuis un montage… », sélection des bornes en cliquant ; la netlist est générée automatiquement et reste modifiable.

## v1.7
- Moteurs asynchrones mono et triphasé : curseur de charge de l'à-vide à 1,2 × In (courant, cos φ, vitesse et couple varient ; courant et cos φ à vide réglables).
- NE555, AOP LF356 et comparateur LM311 (collecteur ouvert en option) avec simulation temporelle.
- Boîtes noires (dipôles et quadripôles) à caractériser : contenu défini par le professeur (netlist ou modèles), masqué à l'élève, code professeur facultatif.
- Nouveaux exemples : NE555 astable, AOP inverseur, boîtes noires.

## v1.6
- Étiquettes colorées : couleur modifiable par étiquette, simple point coloré dans le menu.
- Plan de travail de 4000 × 3000 : zoom (molette, boutons, pincement), déplacement de la vue, ajustement au montage ; l'export PDF prend tout le montage.
- Wattmètre ISW8000 : suppression du trait entre les deux bornes de droite.
- Appareils à aiguille : échelles 0–100 et 0–30 affichées ensemble, l'échelle en service (selon le calibre) en noir.

## v1.5
- Caisse de charge : bornes dédiées M1/M2 (monophasé ou continu) et L1/L2/L3 (triphasé), sélecteur de branchement ; les anciens montages sont migrés.
- Étiquettes sur le matériel (TP ELEN, TP ENER, TP1, TP2, Projet…, modifiables) et filtre du menu (tout / étiquette / sans étiquette), export et import de la configuration, fichier `labosim-tags.json` chargé sur GitHub Pages.

## v1.4
- Câbles : suppression des losanges ; poignées rondes orange (câble : points ; orthogonal : segments).
- Correction : le moteur à courant continu s'arrête quand il n'est plus alimenté.
- Alimentation triphasée 400 V (N, L1, L2, L3), moteur asynchrone triphasé 1,5 kW (cos φ 0,84, couplage étoile/triangle), caisse de charge 0–4 kW (mono/continu ou triphasée, paliers de 200 W ou valeur tapée).
- Sonde de tension (÷10, ÷100) et sonde de courant (÷10, ÷100, ÷300) avec sorties BNC vers l'oscilloscope.
- Compte-tours et couple-mètre pour les moteurs.
- Oscilloscope : mode XY.
- Sauvegarde et ouverture des montages (fichier JSON).

## v1.3
- Câbles : trois tracés au choix en cliquant sur le fil — Câble (courbe passant par des points orange, losanges pour en ajouter, double-clic pour en retirer), Droit, Orthogonal (angles arrondis, segments déplaçables).
- « Clac » sonore quand un relais ou un contacteur colle (bouton 🔊 pour couper).
- Moteur à courant continu (rotor animé, vitesse, sens selon la polarité, couple résistant réglable) et moteur monophasé (cos φ 0,82).
- Lampe à LED et lampe fluocompacte (courant capacitif, seuil d'allumage).

## v1.2
- Menu structuré à gauche : Alimentations, Charges, Commandes, Appareils de mesure, Repérage.
- Notice d'utilisation intégrée, numéro de version affiché.
- Unités au choix sur tous les réglages numériques.
- Wattmètre ISW8000 : mesure de courant entre les deux bornes du bas (symbole fusible), tension sur les deux bornes de droite ; P, Q (VAr), S (VA), PF, V, A ; câblages 3 et 4 fils.
- Une seule pince ampèremétrique (PROVA 21) : affichage A, W, VAr, VA, PF, V ; le câble passe dans l'anneau.
- Relais (bobine et contact visibles) et contacteur 2 NO.
- Câbles : deux losanges de déformation, couleurs orange, violet, marron, gris.
- Rectangles pointillés et textes de repérage.
- Export PDF (NOM, PRÉNOM, GROUPE, RESSOURCE, notes) du schéma et de l'écran agrandi de l'oscilloscope.

## v1.1
- Pinces, appareils à aiguille, ISW8000, commutateur, curseurs de l'oscilloscope, câbles déplaçables.

## v1.0
- Alimentations, résistances, ampoules, condensateurs, bobines, multimètres, wattmètre, GBF, oscilloscope, BNC.
