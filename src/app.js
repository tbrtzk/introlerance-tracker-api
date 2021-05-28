const express = require('express');
const dotenv = require('dotenv');

const { ingredientsController } = require('./controllers');

dotenv.config();

const app = express();

app.use(express.json());
app.use(ingredientsController);

app.listen(process.env.PORT, () => { console.log(`server is running on port ${process.env.PORT}`) });
