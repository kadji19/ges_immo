const db = require('../../db');

exports.getAllVilles = (req, res) => {
    const selectAllVillesQuery = 'SELECT * FROM Ville';
    db.query(selectAllVillesQuery, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.status(200).json(result);
    });
};

exports.getAllTypeProperty = (req, res) => {
    const selectAllTypePropertyQuery = 'SELECT * FROM 	categorie_propriete';
    db.query(selectAllTypePropertyQuery, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.status(200).json(result);
    });
};

exports.getAllProperties = (req, res) => {
    const selectAllPropertiesQuery = 'SELECT * FROM Proprietes';
    db.query(selectAllPropertiesQuery, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json(result);
    });
};

exports.createProperty = (req, res) => {
    const { titre, prix, adresse, description, nbr_chambre, nbr_toilette, type_offre, statut, depot_garantie, images, id_cat_prop, id_ville, proprietaire_id } = req.body;
/*     if (!images || !Array.isArray(images)) {
        return res.status(400).json({ error: "Les images doivent être un tableau de URLs" });
    } */

    const insertPropertyQuery = `
        INSERT INTO Proprietes 
        (titre, prix, adresse, description, nbr_chambre, nbr_toilette, type_offre, statut, depot_garantie, images, id_cat_prop, id_ville, proprietaire_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [titre, prix, adresse, description, nbr_chambre, nbr_toilette, type_offre, statut, depot_garantie, JSON.stringify(images), id_cat_prop, id_ville, proprietaire_id];
    db.query(insertPropertyQuery, values, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, titre, prix, adresse, description, nbr_chambre, nbr_toilette, type_offre, statut, depot_garantie, images, id_cat_prop, id_ville, proprietaire_id });
    });
};

exports.getPropertyById = (req, res) => {
    const { id } = req.params;
    const getPropertyByIdQuery = 'SELECT * FROM Proprietes WHERE id = ?';
    db.query(getPropertyByIdQuery, [id], (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: "Property not found" });
        }
        res.json(result[0]);
    });
};

exports.getPropertiesByOwnerId = (req, res) => {
    const { ownerId } = req.params;
    const getPropertiesByOwnerIdQuery = 'SELECT * FROM Proprietes WHERE proprietaire_id = ?';
    db.query(getPropertiesByOwnerIdQuery, [ownerId], (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json(result);
    });
};
