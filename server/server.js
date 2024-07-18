const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./utilisateur/routes/userRoutes');
const propertyRoutes = require('./propriétaire/routes/propertyRoutes');

app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
