# Changelog

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
