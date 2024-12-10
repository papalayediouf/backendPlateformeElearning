const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

const allTraining = require('./routes/allTrainings/allTraining');
app.use('/allTraining', allTraining);

app.listen(port, () => {
    console.log("Le serveur est en ligne sur le port", port);
});

