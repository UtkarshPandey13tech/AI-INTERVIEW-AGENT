
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });

app.get("/", (req, res) => {
    res.send("AI Interview Agent Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/api/interview/questions", (req, res) => {
    const questions = [
        "Tell me about yourself.",
        "What are your strengths and weaknesses?",
        "Why should we hire you?",
        "Explain a challenging project you have worked on."
    ];

    res.json({
        success: true,
        questions: questions
    });
});
