const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.post("/send", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        res.status(201).json({ success: true, message: "Message saved!" });
    } catch (error) {
        console.error("Error saving message", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});

module.exports = router;
