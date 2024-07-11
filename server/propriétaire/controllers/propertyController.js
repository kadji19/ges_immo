const db = require('../../db');

exports.getAllProperties = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM Propriétés');
        res.json(rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createProperty = async (req, res) => {
    const { adresse, type, prix, proprietaire_id } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO Propriétés (adresse, type, surface, prix, proprietaire_id) VALUES (?, ?, ?, ?, ?)',
            [adresse, type, surface, prix, proprietaire_id]
        );
        res.status(201).json({ id: result.insertId, adresse, type, surface, prix, proprietaire_id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPropertiesByOwnerId = async (req, res) => {
    const { ownerId } = req.params;
    try {
        const [rows] = await db.execute('SELECT * FROM Propriétés WHERE proprietaire_id = ?', [ownerId]);
        res.json(rows);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
