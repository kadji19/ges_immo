const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../db');

exports.register = async (req, res) => {
    const { nom, prenom, email, motDePasse, contact, role } = req.body;
    console.log('Received data:', req.body);  // Log les données reçues
    try {
        const hashedPassword = await bcrypt.hash(motDePasse, 10);
        db.query(
            'INSERT INTO Utilisateurs (nom, prenom, email, motDePasse, contact, role) VALUES (?, ?, ?, ?, ?, ?)',
            [nom, prenom, email, hashedPassword, contact, role],
            (err, result) => {
                if (err) {
                    return res.status(400).json({ error: err.message });
                }
                res.status(201).json({ id: result.insertId, nom, email, role });
            }
        );
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, motDePasse } = req.body;
    try {
        db.query('SELECT * FROM Utilisateurs WHERE email = ?', [email], async (err, rows) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            if (rows.length === 0 || !(await bcrypt.compare(motDePasse, rows[0].motDePasse))) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            const token = jwt.sign(
                { userId: rows[0].id, role: rows[0].role, nom: rows[0].nom },
                'your_jwt_secret',
                { expiresIn: '2h' }
            );
            res.json({ token });
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
