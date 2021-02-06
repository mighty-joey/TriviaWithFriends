const express = require('express');
const router = express.Router();
const Game = require('../models/game');

router.get("/", (req, res) => {
    Game.find({}).then(
        response => {
            res.json(response);
        },
        () => res.json({ error: "error" })
    );
});

module.exports = router;