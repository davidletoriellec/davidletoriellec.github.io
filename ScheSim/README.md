# SchemaSim

**SchemaSim** : application web (un seul fichier HTML, sans dépendance) pour apprendre à **construire, câbler et simuler** un démarrage direct (1 ou 2 sens de marche) de moteur triphasé.

## Utilisation

- **En local** : ouvrir `index.html` dans un navigateur.
- **En ligne (GitHub Pages)** : *Settings → Pages → Deploy from a branch → `main` / `(root)`*. L'application est alors disponible à l'adresse `https://<utilisateur>.github.io/<depot>/`.

## Espace enseignant

La correction n'est pas affichée aux étudiants. Pour faire apparaître le bouton « Voir la solution », ajoutez `#prof` à l'adresse de la page (par exemple `.../index.html#prof`).

## Principe

1. Choisir un exercice dans la liste déroulante.
2. **Édition** : prendre les composants sur l'établi, les placer librement dans la zone de travail, puis les câbler (toucher une borne, puis une autre ; sur les rails +24 V et 0 V, toucher n'importe quel point de la ligne ; toucher un fil pour le supprimer). Les fils sont routés automatiquement (les fils au même potentiel partagent une ligne commune) ; on peut déplacer un fil en le faisant glisser (verticalement ou horizontalement), avec des pistes séparées pour que les croisements (inversion de phases) restent lisibles.
3. **Simulation** : actionner les boutons (maintenir), Q1, l'arrêt d'urgence, le relais thermique. Les éléments actifs (bobine, voyants, moteur) passent en jaune.
4. **Vérifier** : le montage est contrôlé par scénarios de fonctionnement (pas de câblage imposé).

Dans les exercices 2 sens, le **blocage mécanique** se prend sur l'établi et se pose entre les deux contacteurs de puissance (symbole ▽ sur la liaison pointillée ; toucher le symbole pour le retirer). Il est exigé à l'exercice 6, et déjà posé aux exercices 7 et 8. La vérification exige quand même le verrouillage électrique.

Les boutons poussoirs sont **momentanés** : contact tant qu'on appuie, retour à l'état repos au relâchement.

La **flèche du moteur** indique le sens de rotation (elle s'inverse si deux phases sont permutées).

Le bouton **Exporter en PDF** produit une page A4 paysage avec le nom de l'étudiant, la date, le schéma et le résultat de la vérification.

Un **court-circuit** (phases entre elles, ou +24 V / 0 V) est signalé en rouge, en grand, au moment où il se produit.

## Raccourcis et commandes

- **Suppr** (ou Retour arrière) : supprime l'élément ou le fil sélectionné.
- **Ctrl+Z** : annule le dernier ajout, déplacement ou suppression ; **Ctrl+Maj+Z** ou **Ctrl+Y** : rétablit. Le bouton « Annuler » fait la même chose.
- **Simulation** : maintenir un bouton pour l'actionner (plusieurs doigts possibles) ; double appui rapide ou Maj+clic pour le maintenir enfoncé ; un appui le relâche.
- **Pivoter** : sélectionner un élément puis « ⟳ Pivoter » (ou la touche **R**) tourne l'élément de 90°.
- **Taille** : la liste « Taille normale / réduite / petite » réduit les composants du schéma.
- **Composants** : le bouton « 📖 Composants » ouvre une page avec le symbole, une description et, si présente, la photo de chaque appareil (fichiers `images/<identifiant>.jpg`, voir `images/LISEZMOI.txt`).
- **Surcharge F1** : bouton à côté du relais thermique pour simuler une surcharge.

## Exercices

1. Puissance : câblage seul (L1-L2-L3, Q1, KM1, F1, M1)
2. Commande de base (Marche/Arrêt, auto-maintien, voyant H1)
3. Commande avec sécurités (arrêt d'urgence, relais thermique)
4. Commande avec 2 postes
5. Commande avec pédale de sécurité
6. 2 sens : puissance (KM2 permute deux phases)
7. 2 sens : commande avec verrouillage électrique
8. 2 sens : commande avec sécurités

## Établi

Arrêt (NC), Marche (NO), interrupteur à bascule, commutateur à 2 positions, fins de course FDC NO et NC (triangle sur le couteau), arrêt d'urgence, relais thermique F1 (95-96 NC / 97-98 NO), précoupure Q1 (NO), contacts KM1, KM2 et KM3 (13-14, 23-24… en NO ; 21-22, 31-32… en NC, numérotés automatiquement), pédale, bobines KM (KM1, KM2, KM3…) et bobines de relais auxiliaires KA (KA1, KA2…), numérotées dans l'ordre d'ajout, contacts KA1 et KA2 (NO et NC), voyants vert / bleu / blanc / orange / rouge (numérotés H1, H2…).

## Personnaliser

Tout est dans `index.html`, section `<script>` :

- `EX` : liste des exercices (titre, consigne, matériel exigé).
- `TY` : composants de l'établi.
- `genSol()` : schéma de référence (bouton « Voir la solution »).
- `check()` / `stepsFor()` : scénarios de vérification.
