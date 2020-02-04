const express = require("express");
const router = express.Router();
const Ninja = require("../models/Ninja");

// GET a list of all ninjas
router.get("/ninjas", (req, res, next) => {
    res.send("GET req to api/ninjas");
});

router.post("/ninjas", async (req, res, next) => {
    try {
        const ninja = await Ninja.create(req.body);

        res.send(ninja);

    } catch (err) {
        next(err);
    }
});

router.put("/ninjas/:id", async (req, res, next) => {
    try {
        await Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body);

        const updatedNinja = await Ninja.findById(req.params.id);

        res.send(updatedNinja);
        
    } catch (err) {
        next(err);
    }
});

router.delete("/ninjas/:id", async (req, res, next) => {
    try {
        const deletedNinja = await Ninja.findByIdAndRemove({ _id: req.params.id });

        res.send(deletedNinja);

    } catch (err) {
        next(err);
    }
});

module.exports = router;