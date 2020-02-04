const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name field is required"] },
    rank: { type: String },
    available: { type: Boolean, default: false }
});

module.exports = mongoose.model("Ninja", NinjaSchema);