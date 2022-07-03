const express = require('express'); // L'import d'express


// Création de l'application express
const app = express();


    
// Gestion CORS [API ACCESS CONTROL]
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// Parsing body en JSON
app.use(express.json());



// Exportation de l'app
module.exports = app; 