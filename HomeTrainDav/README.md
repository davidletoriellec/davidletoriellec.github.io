# HomeTrainDav

Application web d'entraînement en home trainer, sur le modèle de TrainerDay. Elle pilote un trainer Bluetooth (Van Rysel D100, protocole FTMS), lit une ceinture cardio Sigma, suit des séances structurées ou des parcours GPX, et garde l'historique de chaque utilisateur sur un serveur Netlify protégé par un mot de passe commun.

Utilisateurs : David, Isabelle, Daniel, Raphaël. Navigateur conseillé : Google Chrome (Bluetooth web).

*Dernière mise à jour : 18 octobre 2026.*

## Fonctions

- **Séances structurées** : blocs en minutes et % de FTP (rampes possibles), import .zwo, .fit et .tcx, sauvegarde par utilisateur.
- **Zones de travail colorées** (Z1 à Z6), graphique avec échelles en watts et en minutes, point de position, ligne de puissance réelle.
- **Intensité de séance** réglable de 5 % en 5 % (100 % = normal).
- **Pendant la séance** : décompte du bloc en cours, cible du bloc suivant, bips avant chaque bloc, bouton Bloc suivant, écran maintenu allumé, carte cardio colorée selon la zone.
- **Test FTP** en rampe (FTP = 75 % de la puissance maximale atteinte).
- **Parcours GPX** : profil d'altitude coloré selon la pente, échelles en km et en m, pente simulée de −10 % à +12 % (lissée), parcours sauvegardés par utilisateur.
- **Historique** : puissance moyenne, FC, kilomètres virtuels (100 % de FTP = 27 km/h, réglable), récapitulatif par bloc et par zone.
- **Export CSV** (séparateur virgule) : résumé des séances ou détail par bloc.
- **Quatre profils** avec FTP, FC max, vitesse, séances, parcours et historique synchronisés sur le serveur.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (une seule page, sans bibliothèque externe) |
| `netlify/functions/api.mjs` | Fonction serveur : vérifie le mot de passe, lit et écrit les profils |
| `netlify.toml` | Réglage de publication (`publish = "."`) |
| `package.json` | Dépendance `@netlify/blobs` (stockage des profils) |
| `README.md` | Ce fichier |

## Organisation du projet

- **GitHub** : compte `davidletoriellec`, dépôt `davidletoriellec.github.io`, branche `main`. L'appli est dans le sous-dossier `HomeTrainDav`.
- **Netlify** (plan gratuit) : projet `hometraindav`, adresse `https://hometraindav.netlify.app`, relié au dépôt GitHub.
  - Base directory : `HomeTrainDav` (casse exacte).
  - Build command et Publish directory : vides.
  - Functions directory : `netlify/functions`.
  - Variable d'environnement `APP_PASSWORD` : mot de passe commun, cochée « Contains secret values ».
  - Visibilité : Production visibility = **Public** (Project configuration → General → Visitor access). Deploy Preview visibility peut rester Private.
- **Stockage** : Netlify Blobs, magasin `hometraindav`, clés `user-0` à `user-3` (dans l'ordre David, Isabelle, Daniel, Raphaël).

## Mettre à jour l'application

1. Sur GitHub, ouvrir le fichier à modifier (par exemple `index.html`) dans le sous-dossier `HomeTrainDav`.
2. Cliquer sur le crayon pour coller le nouveau contenu, ou utiliser **Add file → Upload files** avec un fichier du même nom.
3. Cliquer sur **Commit changes**.
4. Netlify republie automatiquement en environ une minute. Sur le plan gratuit, un déploiement coûte 15 crédits sur 300 par mois.

## Changer le mot de passe

1. Netlify → projet `hometraindav` → Project configuration → Environment variables.
2. Modifier `APP_PASSWORD`.
3. Deploys → Trigger deploy → **Deploy project without cache**.

Chaque appareil redemandera alors le mot de passe.

## Changer la liste des utilisateurs

Modifier `USERS` dans `netlify/functions/api.mjs` **et** `US` dans `index.html`, dans le même ordre : l'ordre détermine la clé de stockage.

## Sécurité

- Le mot de passe est vérifié par la fonction serveur, jamais dans la page. Sans lui, aucune donnée n'est renvoyée.
- Il est mémorisé en clair dans le navigateur de chaque appareil, et il n'y a pas de limite de tentatives (un délai d'une seconde par échec) : choisir au moins douze caractères.
- Les quatre utilisateurs partagent le mot de passe et peuvent donc ouvrir les profils des autres.

## Limites connues

- Si deux appareils modifient le même profil en même temps, la dernière sauvegarde écrase l'autre.
- Hors connexion, l'appli fonctionne en mode local et envoie les données au serveur à la sauvegarde suivante.
- Les imports .fit et .tcx n'ont pas été essayés avec de vrais fichiers.
- Le comportement du trainer en pente (−10 % à +12 %) reste à valider.

## Dépannage

| Symptôme | Piste |
|---|---|
| Netlify affiche « Page not found » | Vérifier que le Base directory est exactement `HomeTrainDav`, puis relancer un déploiement sans cache |
| Netlify demande une connexion aux visiteurs | Passer Production visibility sur Public |
| « Mode local : serveur injoignable » | Vérifier que `netlify/functions/api.mjs` est dans le dépôt, puis redéployer |
| « Mot de passe incorrect » alors qu'il est bon | Relancer un déploiement après avoir modifié `APP_PASSWORD` |
| Le trainer ne répond pas | Faire quelques tours de pédales, vérifier qu'aucune autre appli n'y est connectée |

## Documentation

La documentation technique et la notice d'utilisation sont fournies séparément (documents « HomeTrainDav – Documentation technique » et « HomeTrainDav – Notice d'utilisation »).
