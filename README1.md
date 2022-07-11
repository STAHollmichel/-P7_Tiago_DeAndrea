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

# Fichier `.env.dist`

- Ouvrir les fichiers "/backend/.env.dist" + "/frontend/.env.dist"
- Insérer nom, mot de passe, nom de votre DB et host.
- Modifier l'extension du fichier ".env.dist" par ".env".
- La migration sequelize à votre DB sera alors possible.

# Exécuter dans le terminal : 

- 1- `cd backend`
- 2- `npx sequelize-cli db:migrate`

# Ouvrir un deuxième terminal et exécuter :
- 1- `cd backend`
- 2- `nodemon`

# Dans un autre terminal et exécuter :
- 1- `cd frontend`
- 3- `npm install`
- 3- `npm start`