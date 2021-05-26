const { response } = require("express");
const express = require("express");
require('dotenv').config();

const app = express();

console.log("nothing happens")
app.listen(process.env.PORT, () => { console.log(`server is running on port ${process.env.PORT}`) });
