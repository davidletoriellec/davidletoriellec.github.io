## v3.10.0
- **Menu de gauche réorganisé** : 18 catégories classées par ordre alphabétique (Alimentations, Appareils de mesure, Audio, Boîtes noires, Capteurs, Charges, Charges domestiques, Charges industrielles, Circuits intégrés, Commandes, Composants, Composants électroniques, Micro-contrôleur, Moteurs, Relais et Contacteurs, Repérage, Semi-conducteurs, Transformateurs). Les étiquettes (filtre) sont inchangées.
- **Oscilloscope** : voie mathématique (CH1 + CH2, CH1 − CH2, CH2 − CH1, CH1 × CH2) avec échelle auto ou réglable ; mémorisation d'une courbe de référence (CH1 ou CH2, pointillés blancs) et enregistrement des courbes en fichier CSV.
- **Transformateurs réalistes** (nouvelle rubrique) : monophasé et triphasé (Yy0/6, Yd1/11, Dy11/1, Dd0/6) ; réglage de U1n, U2 à vide, Sn (VA), pertes fer, puissance réactive de magnétisation Q0, pertes cuivre Pj et tension de court-circuit (flux de fuite). Modèle d'enroulements couplés (R, L de fuite, Lm, Rfe), actif en régime sinusoïdal **et** en simulation temporelle (transformateur + redresseur). Panneau : U, I, P, pertes, Q, rendement, charge, chute de tension. Bouton « Valeurs typiques ».
- **Alimentation à découpage** (menu Alimentations) : entrée 24–400 V (alternatif ou continu), sortie 3,3–15 V, puissance maximale 30–300 W (limitation), rendement réglable ; courant d'entrée = P sortie / rendement.
- **Résistance des câbles** : option par câble (cuivre / aluminium, section 0,75 à 35 mm², longueur en m ; R = ρ·L/S à 20 °C), active en régime sinusoïdal/continu et en simulation temporelle. Affichage de R, du courant, de la chute de tension et des pertes ; étiquette sur le câble ; **témoin de surcharge** (rouge + ⚠) au-delà du courant admissible indicatif de la section (alu = 80 % du cuivre). **Sélection multiple** de câbles (Maj/Ctrl + clic, ou « Sélectionner tous les câbles ») avec application groupée ; Suppr supprime la sélection. Par défaut les câbles restent idéaux (5 mΩ). Câbles coaxiaux exclus.
- **Textes du plan** : édition directe par double-clic (ou double-tap) ; barre d'outils G / I / S, indice, exposant, **vecteur** (flèche tracée au-dessus), tailles petit / moyen / grand **par portion de texte** (et taille de base du texte entier), boutons qui s'allument selon la position du curseur ; le vecteur se plaque sur toute la sélection par **une seule flèche**, et se désactive en recliquant sur le bouton. Rendu identique dans le plan, l'export PDF et l'export PNG ; les anciens textes restent inchangés. Le titre d'un rectangle pointillé se modifie aussi par double-clic. Zone de clic des textes élargie à toute leur boîte.

# Changelog

## v3.9.3
- **Import de boîtes noires** : accepte maintenant l'export de la bibliothèque, le fichier d'**une seule boîte** (format « un fichier par boîte »), un **montage enregistré** contenant des boîtes, et plusieurs fichiers à la fois ; messages d'erreur explicites (le fichier index n'est pas importable).
- **Export en PDF ou en PNG** : le bouton « Exporter » propose le PDF (page A4 avec nom, date, notes) ou une **image PNG sur fond blanc ou transparent** du schéma (ou de l'écran de l'oscilloscope), haute résolution, sans quadrillage.
- **Fenêtre d'accueil** au démarrage : nom, version, zone des créateurs (à modifier dans `index.html`, bloc `#spc`), boutons « Faire un montage » et « Ouvrir un exemple », et 3 exemples tirés au hasard. Se ferme aussi avec Échap ou un clic à côté.
- **Exemples** : retirés du menu de gauche ; bouton « 📚 Exemples » dans la barre du haut qui ouvre une fenêtre avec la liste complète (aussi accessible depuis l'accueil).

## v3.9.2
- **Contournement automatique** : un câble sans point manuel contourne désormais les écrans, cadrans et boutons des appareils (calcul de trajet par points de passage autour de la zone), en plus du masquage résiduel de v3.9.1. Les câbles à points manuels ne sont pas modifiés. Bouton 🧵 pour désactiver.
- Test d'export/import des boîtes noires : la valeur réelle d'une résistance à tolérance (ex. 1037 Ω) est conservée.

## v3.9.1
- Les câbles restent **devant** les appareils mais sont masqués au-dessus des **écrans, cadrans et boutons** (afficheurs, ampèremètres, wattmètre, multimètre, GBF…) ; fiches toujours visibles. Bouton 🧵 près du zoom pour afficher les câbles partout (mémorisé).

## v3.8.2
- **Boîtes noires : nouveaux éléments** — GBF (`G`), régulateur réglable (`U`), ampli-op (`A`), comparateur (`K`), optotriac (`O`), NE555 (`N`), MOSFET / HEMT / GaN (`M … N|P|H|G`), phase des sources alternatives (`V … AC f phase`). La capture « tout type » reprend aussi l'alimentation double, l'alimentation triphasée, le GBF, les lampes LED / fluocompactes, l'optotriac, le régulateur, l'ampli-op, le comparateur et le NE555.
- Référence de masse : sans alimentation à l'extérieur, la masse est prise sur la borne « − » de la première source de la boîte.

## v3.8.1
- **Sources dans les boîtes noires** : nouvelle ligne de netlist `V nom + - valeur [AC fréquence]` (générateur de tension continu ou alternatif), utilisable pour simuler une batterie (modèle de Thévenin : source + résistance) ou une alimentation. Deux modèles ajoutés dans l'éditeur.
- Menu Boîtes noires : entrées « Dipôle / Quadripôle tout type » pour capturer aussi alimentations, diodes, transistors, triacs, lampes… (les entrées habituelles ne prennent toujours que R, C, L).

## v3.8.0
- **Boîtes noires étendues** : la capture accepte aussi diodes / LED / Zener, transistors bipolaires, MOSFET N/P, triacs, lampes, LDR, boîtes à décades et interrupteurs fermés ; nouveaux éléments de netlist `D`, `Q`, `M`, `T` (mode temporel automatique). Les valeurs réelles des résistances à tolérance ±5 % sont figées dans la boîte.
- **Ventilateurs** 230 V monophasé (domestique) et 400 V triphasé (industriel), **aspirateur 2000 W** (moteur universel ≈ 9 A, 17 000 tr/min) : nouveaux modèles de moteur avec hélice / turbine. Exemples 33 et 34.

## v3.7.3
- Bibliothèque de boîtes noires : **un fichier par boîte** + `labosim-bb-index.json` (même principe que les étiquettes). Les fichiers placés dans `bb/` et listés dans l'index se chargent au démarrage ; `labosim-bb.json` (tout en un) reste accepté.

## v3.7.2
- **Correctif** : relais et contacteurs fonctionnent maintenant en simulation temporelle (dès qu'un triac, une diode, un transistor… est dans le montage). Avant, la bobine était ignorée dans ce mode : le contacteur ne collait jamais quand il était piloté par un triac / optotriac. La bobine, le collage (80 % de la tension bobine), le retombée (30 %) et les contacts sont désormais pris en compte.

## v3.7.1
- **Ampèremètre shunté par un fil** (astuce pour éviter la pointe de démarrage d'un moteur) : un fil entre les deux bornes de l'ampèremètre (numérique, multimètre en mode courant ou à aiguille) court-circuite l'appareil : il ne voit plus le courant et son fusible ne saute plus. En retirant le fil une fois le moteur lancé, on lit le courant nominal. Sans fil, la pointe de démarrage fait toujours sauter le fusible.

## v3.7.0
- **Bibliothèque de boîtes noires** (menu Boîtes noires) : « 📚 Enregistrer dans la bibliothèque » sur une boîte sélectionnée ; le contenu reste chiffré et le code professeur est conservé. La bibliothèque est mémorisée dans le navigateur, avec export / import, et se charge automatiquement depuis `labosim-bb.json` placé à côté de `index.html` (même principe que les étiquettes).
- **Système de levage** (menu Charges mécaniques) : treuil + masse couplés à un moteur (automatique = le plus proche, ou choix). Masse, rayon du tambour et réducteur fixent le couple résistant, donc la charge du moteur (courant, rotation) ; la masse monte à la vitesse du moteur, se retient à l'arrêt, et le moteur cale si la charge est trop lourde. Exemple 32.

## v3.6.0
- **Ohmmètre** (menu Appareils de mesure) : calibres 200 Ω, 2 kΩ, 20 kΩ, 200 kΩ, 2 MΩ (« OL » au-delà), choix en cliquant sur l'appareil ou dans le panneau. Mode **BIP** (test de continuité) : bip continu sous 50 Ω.
- **Régulateur de tension réglable** (menu Alimentation régulée) : tension de sortie Un réglable, tension de déchet (dropout), limitation de courant. Exemple 31 : alimentation régulée (pont + filtre + régulateur).
- Correctif : le calibre choisi sur l'ampèremètre à aiguille s'affiche sur l'appareil.

## v3.5.0
- **Wattmètre renommé POWER8000** ; fusible **16 A** (saute au-dessus de 17 A, affichage FUSE, bouton « Changer le fusible »).
- **Ampèremètres numériques** : fusible **10 A** (saute au-dessus de 11 A).
- **Ampèremètre à aiguille** : 3 bornes **COM / 3 A / 10 A**. Borne 3 A (fusible 3 A, jusqu'à 3,3 A) : calibres ≤ 3 A, précision élevée ; borne 10 A (fusible 10 A) : calibre 10 A, précision moindre.
- Champs de valeur : **liste déroulante des préfixes supprimée** (saisie 1k, 4u7, 10m… ; l'unité est affichée à côté).
- Notice : le sommaire ne masque plus le début de la rubrique.

## v3.4.0
- **Boîte à décades** (menu Charges) : 6 cadrans de 0 à 9, utilisable en **résistance** (1 Ω à 999 999 Ω), **condensateur** (1 nF à 999,999 µF) ou **bobine** (1 µH à 999,999 mH). On change un chiffre en cliquant sur ▲ (haut) ou ▼ (bas) du cadran, ou en tapant la valeur dans le panneau.
- **Saisie avec préfixes** dans tous les champs de valeur : `1k` = 1 kΩ / 1 kV, `4k7`, `1u` = 1 µ, `10m` = 10 milli, `2M` = 2 méga, `p`, `n`, `G`… (m = milli, M = méga). L'unité s'ajuste automatiquement.
- **Multimètre universel** : boutons de courant renommés **DCI** et **ACI** (au lieu de DCA / ACA).
- **Notice** : sommaire cliquable et **champ de recherche** (filtre les rubriques et les lignes qui contiennent le mot).

## v3.3.8
- **Bouton 🔊 / 🔇** : le muet coupe maintenant immédiatement tous les sons en cours (moteurs, haut-parleur), sans attendre une action.
- Exemples : le texte explicatif est placé au-dessus du montage (il ne passe plus sur les composants).

## v3.3.7
- Exemples : les textes explicatifs sont maintenant coupés en ~4 lignes (au lieu d'une seule ligne très longue qui faussait le zoom automatique).

## v3.3.6
- **Moteurs : son coupé par défaut** ; case « Son du moteur (vrombissement) » dans le panneau de chaque moteur pour l'activer (les relais et le haut-parleur gardent leur son).
- Nouvel exemple **« Interface 5 V / 230 V (optotriac + triac) »** : commande logique 5 V (ou 3,3 V) → LED de l'optotriac MOC3021 → gâchette du triac → lampe 60 W sous 230 V, avec isolation galvanique.

## v3.3.5
- **Curseur de volume** à côté du bouton 🔊 (réglage mémorisé) : agit sur les relais, le haut-parleur et les moteurs.
- Vrombissement des moteurs beaucoup plus doux (onde adoucie, filtre grave, niveau divisé par ~5).

## v3.3.4
- Démarrage des moteurs alternatifs : appel de courant ramené à **≈ 0,2 s**.
- **Multimètres numériques** : latence réduite à ≈ 80 ms (affichage quasi instantané, en continu).

## v3.3.3
- **Annuler / rétablir** : Ctrl+Z / Ctrl+Y (ou Ctrl+Maj+Z), jusqu'à 100 étapes (ajout, suppression, déplacement, câblage, réglages, exemples chargés).
- **Copier / coller** de composant : Ctrl+C / Ctrl+V (collages décalés), et Ctrl+D pour dupliquer. Les réglages sont conservés, les câbles non.
- **Appareils de mesure** : sur les voltmètres / ampèremètres à aiguille, clic sur « AC ~ / DC = » pour changer de mode et clic sur un **calibre** (les chiffres autour du bouton) pour le choisir ; sur les multimètres numériques, clic sur AC/DC (cadran ou écran). Le menu du bas reste disponible.
- **Vrombissement léger** des moteurs (MCC, monophasé, triphasé), qui monte avec la vitesse ; coupé par le bouton 🔊.
- **Menus** : bouton ⊟ / ⊞ pour tout replier ou tout déplier, et la section **Exemples** peut maintenant se replier.

## v3.3.2
- Démarrage des moteurs alternatifs ramené à **≈ 0,3 s** (appel de courant bref).
- **Multimètres numériques** (ampèremètre, voltmètre, multimètre universel) : affichage à intégration lente (≈ 0,5 s), comme un vrai appareil — le pic de démarrage de 0,3 s n'est presque pas visible ; il reste bien visible sur les appareils **à aiguille**.

## v3.3.1
- **Démarrage des moteurs alternatifs** (monophasé et triphasé) : quand on les met sous tension, le courant d'appel (≈ 6 × In) décroît progressivement pendant ~1,5 s à mesure que le moteur accélère (la vitesse affichée monte aussi). Un ampèremètre à aiguille ou un multimètre montre donc le pic de démarrage. À la coupure, le moteur ralentit et le prochain démarrage refait un appel de courant.

## v3.3.0
- **Multimètre universel : fusibles.** Borne **3 A** : le fusible grille au-dessus de 3,3 A ; borne **16 A** : au-dessus de 17 A (on peut monter jusqu'à 20 A). Un fusible grillé coupe le circuit (« FUSE » à l'écran, croix rouge sur la borne). Bouton **« Changer le fusible »** dans le panneau pour réarmer l'appareil.
- **Voltmètres / ampèremètres à aiguille** : équipage mobile amorti (≈ 0,4 s, léger dépassement) : l'aiguille ne suit plus les variations rapides (démarrage moteur, PWM…) et indique la moyenne (valeur efficace en AC), comme un vrai appareil.
- **Nouveaux composants** (simulation temporelle) : transistor bipolaire NPN / PNP et de puissance (TIP41 / TIP42), MOSFET canal N / P et de puissance, HEMT à déplétion, HEMT GaN, **triac de puissance**, **optotriac** (MOC3021, option passage par zéro), **haut-parleur** (son WebAudio reconstruit depuis le courant de bobine), **microphone** (dynamique ou électret ; son réglable ou micro réel de l'appareil).
- Exemples : transistor en commutation, triac, haut-parleur + GBF.

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
