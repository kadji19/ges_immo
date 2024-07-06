const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../db');

exports.register = async (req, res) => {
    const { nom, prenom, email, motDePasse, contact, role } = req.body;
    console.log('Received data:', req.body);  // Log les données reçues
    try {
        const hashedPassword = await bcrypt.hash(motDePasse, 10);
        const [result] = await db.execute(
            'INSERT INTO Utilisateurs (nom, prenom, email, motDePasse, contact, role) VALUES (?, ?, ?, ?, ?, ?)',
            [nom, prenom, email, hashedPassword, contact, role]
        );
        res.status(201).json({ id: result.insertId, nom, email, role });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, motDePasse } = req.body;
    try {
        const [rows] = await db.execute('SELECT * FROM Utilisateurs WHERE email = ?', [email]);
        if (rows.length === 0 || !(await bcrypt.compare(motDePasse, rows[0].motDePasse))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign(
            { userId: rows[0].id, role: rows[0].role, nom: rows[0].nom },
            'your_jwt_secret',
            { expiresIn: '2h' } // Définir l'expiration du token à 2 heures
        );
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
