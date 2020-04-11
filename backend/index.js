const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');

const routes = require("./routes");
require('./src/config/database');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => console.log("[dev] Server running on port " + port));