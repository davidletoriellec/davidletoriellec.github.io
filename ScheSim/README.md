# Schéma électrique : démarrage direct 1 sens

Application web (un seul fichier HTML, sans dépendance) pour apprendre à **construire, câbler et simuler** un démarrage direct un sens de moteur triphasé.

## Utilisation

- **En local** : ouvrir `index.html` dans un navigateur.
- **En ligne (GitHub Pages)** : *Settings → Pages → Deploy from a branch → `main` / `(root)`*. L'application est alors disponible à l'adresse `https://<utilisateur>.github.io/<depot>/`.

## Principe

1. Choisir un exercice dans la liste déroulante.
2. **Édition** : prendre les composants sur l'établi, les placer librement dans la zone de travail, puis les câbler (toucher une borne, puis une autre ; toucher un fil pour le supprimer).
3. **Simulation** : actionner les boutons (maintenir), Q1, l'arrêt d'urgence, le relais thermique. Les éléments actifs (bobine, voyants, moteur) passent en jaune.
4. **Vérifier** : le montage est contrôlé par scénarios de fonctionnement (pas de câblage imposé).

La **flèche du moteur** indique le sens de rotation (elle s'inverse si deux phases sont permutées).

Le bouton **Exporter en PDF** produit une page A4 paysage avec le nom de l'étudiant, la date, le schéma et le résultat de la vérification.

Un **court-circuit** (phases entre elles, ou +24 V / 0 V) est signalé en rouge, en grand, au moment où il se produit.

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

Arrêt (NF), Marche (NO), arrêt d'urgence, relais thermique F1 (95-96 NF / 97-98 NO), précoupure Q1 (NO), KM1 13-14 (NO), KM1 21-22 (NF), KM2 13-14 / 21-22 et bobine KM2 (exercices 2 sens), pédale, bobine KM1, voyants H1 / H2 / H3.

## Personnaliser

Tout est dans `index.html`, section `<script>` :

- `EX` : liste des exercices (titre, consigne, matériel exigé).
- `TY` : composants de l'établi.
- `genSol()` : schéma de référence (bouton « Voir la solution »).
- `check()` / `stepsFor()` : scénarios de vérification.
