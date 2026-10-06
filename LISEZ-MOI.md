# Liste de mariage — site autonome

Les modifications faites dans « Espace mariés » sont enregistrées directement
sur le site (Netlify Functions + Netlify Blobs). Plus aucun téléchargement.

## Mise en ligne (une seule fois)

Le glisser-déposer de Netlify ne gère pas bien les fonctions : utilise GitHub.

1. Crée un dépôt GitHub (privé ou public) et envoie-y tout le contenu de ce dossier.
2. Sur Netlify : Site configuration > Build & deploy > Continuous deployment >
   « Link to Git provider », puis choisis ton dépôt. Ton site garde la même adresse.
   Réglages de build : laisse vide (netlify.toml s'en charge).
3. Dans Site configuration > Environment variables, ajoute :
   ADMIN_PASSWORD = le mot de passe de ton choix.
4. Redéploie (Deploys > Trigger deploy).

## Utilisation

Ouvre le site, clique sur « Espace mariés », entre le mot de passe.
Tu peux marquer offert, supprimer ou ajouter un cadeau. Tout est enregistré
tout de suite et visible par tes invités.
