require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const logger = require("morgan");

// Import Routes
const apiRouter = require("./routes/api");

// DB Setup
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

// Middleware
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Initialize Routes
app.use("/api", apiRouter);

// Error Handling Middleware
app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));