const express = require('express');
const router = express.Router();
const Game = require('../models/game');

router.get("/", (req, res) => {
    const userId = req.query.userId

    Game.find({ userId: userId }).then(
        response => {
            res.send(response);
        },
        () => res.json({ error: "error" })
    );
});

router.post('/save', (req, res) => {
    const data = req.body;

    if (data._id) {
        Game.updateOne({ _id: data._id },
            data,
            (error, result) => {
                if (error) {
                    res.status(500).send(result);
                } else {
                    res.status(200).send(error)
                }
            }
        )
    } else {
        const game = new Game(data);

        game.save((error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send(result);
            }
        });
    }
});

router.delete('/delete', (req, res) => {
    const gameId = req.query.gameId;

    Game.findByIdAndDelete(gameId, (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(result);
        }
    });
});

module.exports = router;