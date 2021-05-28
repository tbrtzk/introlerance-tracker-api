const express = require('express');
const ingredientsController = express.Router();

ingredientsController.get("/ingredient", (_req, res) => {
    const ingredient = {
        id: 1,
        name: "tofu",
        amount: "2g"
    }
    res.json(ingredient);
});

ingredientsController.post("/ingredient", (req, res) => {
    console.log(req.body)
    res.end();
});

module.exports = {
    ingredientsController,
}