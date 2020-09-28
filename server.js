require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT||3001;
const mongoose = require("mongoose");
const cors = require("cors");

const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on("open", () => {
    console.log("Mongo is Connected");
});

// Middleware
app.use(cors());
app.use(express.json());

// Controller
app.use("/api/cities", require('./controllers/cityController'));

// Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});