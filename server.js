const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Route pour la racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API de la plateforme e-learning !');
});

// Importer les routes
const allTraining = require('./routes/allTrainings/allTraining');
app.use('/allTraining', allTraining);

// Lancement du serveur
app.listen(port, () => {
    console.log("Le serveur est en ligne sur le port", port);
});
