const db = require('../../db');

exports.createCandidate = (req, res) =>{
    const {id_propriete, id_client, contact, situation, message} = req.body
    const insertCandidateQuery = `INSERT INTO Candidats (id_propriete, id_client, contact, situation, message) VALUES (?, ?, ?, ?, ?)`;
    const values = [id_propriete, id_client, contact, situation, message];
    db.query(insertCandidateQuery, values, (err, result) => {
        if (err) {
            return res.status(400).json({error: err.message});
            
        } 
        res.status(201).json({ message: "insertion réussi" });
    });
};

// Afficher les candidats par propriétaire de bien
exports.getCandidatesByOwner = (req, res) => {
    const { ownerId } = req.params;
    const selectCandidatesQuery = `
                            SELECT 
                                c.id_candidat, 
                                c.id_propriete, 
                                c.id_client, 
                                c.contact, 
                                c.situation, 
                                c.message,
                                u.nom, 
                                u.prenom,
                                p.titre, 
                                p.adresse 
                            FROM Candidats c
                            JOIN Proprietes p ON c.id_propriete = p.id_propriete
                            JOIN Utilisateurs u ON c.id_client = u.id
                            WHERE p.proprietaire_id = ?
    `;
    db.query(selectCandidatesQuery, [ownerId], (err, results) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};