const express = require('express'); // L'import d'express
const router = express.Router(); // Création du router via express

// L'import du contrôleur user
const userCtrl = require('../controllers/user');

// L'import du middleware
const auth = require('../middleware/auth'); 


// Route POST pour enregistrer des contes utilisateurs   
router.post('/signup', userCtrl.signup);
// Route POST pour la connexion des utilisateurs  
router.post('/login', userCtrl.login);


// Route pour selecioner l'utilisateur
router.get('/', auth, userCtrl.getOneUser);
// Route pour modifier l'utilisateur
router.put('/', auth, userCtrl.updateUser);
// Route pour effacer l'utilisateur
router.delete('/', auth, userCtrl.deleteUser);



// L'exporte vers la app
module.exports = router;