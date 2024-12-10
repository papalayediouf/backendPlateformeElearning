const express = require('express');
const router = express.Router();

const cors = require('cors');
router.use(cors());

// Données des formations
const formations = [
    {
        id: 1,
        nom: 'Formation Node.js',
        dateFormation: '2024-12-15',
        nombreUtilisateursMax: 50,
        thematique: 'Développement Web',
        prix: 200,
        dateAjout: '2024-11-01',
        dateModification: '2024-12-01',
    },
    // Autres formations initiales
];

// Route GET pour afficher toutes les formations
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        formations,
    });
});

// **Route POST** pour ajouter une formation
router.post('/', (req, res) => {
    const { nom, dateFormation, nombreUtilisateursMax, thematique, prix } = req.body;

    if (!nom || !dateFormation || !nombreUtilisateursMax || !thematique || !prix) {
        return res.status(400).json({
            success: false,
            message: 'Tous les champs sont requis',
        });
    }

    const nouvelleFormation = {
        id: formations.length + 1,
        nom,
        dateFormation,
        nombreUtilisateursMax,
        thematique,
        prix,
        dateAjout: new Date().toISOString(),
        dateModification: new Date().toISOString(),
    };

    formations.push(nouvelleFormation);

    res.status(201).json({
        success: true,
        message: 'Formation ajoutée avec succès',
        formation: nouvelleFormation,
    });
});

// Route PUT pour modifier une formation
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { nom, dateFormation, nombreUtilisateursMax, thematique, prix } = req.body;

//     const formationIndex = formations.findIndex((formation) => formation.id === parseInt(id));

//     if (formationIndex === -1) {
//         return res.status(404).json({
//             success: false,
//             message: 'Formation non trouvée',
//         });
//     }

//     formations[formationIndex] = {
//         ...formations[formationIndex],
//         nom,
//         dateFormation,
//         nombreUtilisateursMax,
//         thematique,
//         prix,
//         dateModification: new Date().toISOString(),
//     };

//     res.status(200).json({
//         success: true,
//         message: 'Formation modifiée avec succès',
//         formation: formations[formationIndex],
//     });
// });

// **Route DELETE** pour supprimer une formation
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
  
//     const formationIndex = formations.findIndex((formation) => formation.id === parseInt(id));
  
//     if (formationIndex === -1) {
//       return res.status(404).json({
//         success: false,
//         message: 'Formation non trouvée',
//       });
//     }
  
//     formations.splice(formationIndex, 1);
  
//     res.status(200).json({
//       success: true,
//       message: 'Formation supprimée avec succès',
//     });
//   });
  

module.exports = router;
