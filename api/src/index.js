const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3333;

const routes = require('./routes');
require('./config/database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.listen(port, () => console.log("[dev] 🔥 Server running on port " + port));