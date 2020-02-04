const express = require("express");
const router = express.Router();
const Ninja = require("../models/Ninja");

// GET a list of all ninjas
router.get("/ninjas", (req, res) => {
    res.send("GET req to api/ninjas");
});

router.post("/ninjas", async (req, res, next) => {
    try {
        const ninja = await Ninja.create(req.body);

        res.send(ninja);

    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.put("/ninjas/:id", (req, res) => {
    res.send("PUT req to api/ninjas/someid");
});

router.delete("/ninjas/:id", (req, res) => {
    res.send("DELETEmm req to api/ninjas/someid");
});

module.exports = router;