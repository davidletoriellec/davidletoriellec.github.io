# Régime TT : défaut d’isolement

Appli web pédagogique (1ʳᵉ année) : l’étudiant règle RB, RA, Rhomme, ferme le DDR, provoque un défaut d’isolement sur un appareil monophasé, fait des mesures (voltmètre, ampèremètre), conclut puis exporte un PDF (nom, prénom, groupe, schéma, mesures, conclusion).

## Contenu
- `index.html` : l’appli complète, un seul fichier (HTML + CSS + JavaScript).
- `README.md` : ce fichier.

## Publier avec GitHub Pages
1. Crée un dépôt sur GitHub (par exemple `regime-tt`), en public.
2. Ajoute les deux fichiers : bouton **Add file > Upload files**, puis **Commit changes**.
3. Va dans **Settings > Pages**. Dans **Build and deployment**, choisis **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une ou deux minutes, l’appli est disponible à l’adresse `https://TON-PSEUDO.github.io/regime-tt/`.

## Modifier le lien vers la ressource
Dans `index.html`, cherche `RESSOURCE_URL` et change l’adresse (et `RESSOURCE_TITRE` pour le texte du bouton). Laisse `""` pour cacher le bouton.

## Corrigé pour les enseignants
Ajoute `#profs` à la fin de l’adresse (`.../regime-tt/#profs`) : un bouton « Corrigé (enseignants) » apparaît dans la zone Conclusion.

## À savoir
- Le PDF est généré avec la bibliothèque jsPDF, chargée depuis cdnjs : une connexion internet est nécessaire.
- Hypothèses de calcul : 230 V, seuil de tension de contact de 50 V (utilisé seulement pour le corrigé).
