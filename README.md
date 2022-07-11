# Groupomania [API Development & APP Development]


## Intro ##

Créer un réseau social d'entreprise

Le But : construire le front-end et back-end du réseau social interne de l'entreprise Groupomania, permettant de faciliter les intéractions entre collègues, grâce notamment à l'échange d'images/gifs/textes.

Fonctionnalités :

- créer une compte utilizateur
- login persistant et Deconnexion
- ajouter/modifier/supprimer une publication avec des images
- système de likes
- page profil : supprimer le compte
- Role administrateur

# Backend

# Technologies & frameworks utilisés
- JavaScript
- Node.js / Express (API REST)
- MySql
- Sequelize
- NPM

Dépendances utilisées via NPM:
- nodemon
- express
- bcrypt
- jsonwebtoken
- dotenv
- multer
- mysql2
- sequelize
- sequelize-cli


# Frontend


# Technologies & frameworks utilisés
- JavaScript
- React (App)
- Bootstrap
- Sass
- NPM
- Axios

Dépendances installées via NPM:
- axios
- bootstrap
- react
- react-bootstrap
- react hook-form
- react-router-dom
- react-spinners
- sass



## Usage ##

# important
! Ajouter Dossier /backend/images S'il n'est pas disponible

# Fichier `.env.dist`

- Ouvrir les fichiers "/backend/.env.dist" + "/frontend/.env.dist"
- Dans le env backend: Insérer nom, mot de passe, nom de votre DB et host.
- Dans le env backend: Insérer le host de l'API que vous avez choisi.
- Modifier l'extension du fichier ".env.dist" par ".env".
- La migration sequelize à votre DB sera alors possible.

- Import de La DB SQL dans le dossier des livrables - Fichier: DeAndrea_Tiago_P7_bdd_022022.sql

- Infos du Compte Admin dans le dossier des livrables - Fichier: DeAndrea_Tiago_P7_compte_admin_022022.txt

# Exécuter dans le terminal : 

- 1- `cd backend`
- 2- `npx sequelize-cli db:migrate`

# Ouvrir un deuxième terminal et exécuter :
- 1- `cd backend`
- 2- `nodemon`

# Dans un troisième terminal et exécuter :
- 1- `cd frontend`
- 2- `npm install`
- 3- `npm start`