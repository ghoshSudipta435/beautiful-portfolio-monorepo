const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./db");

dotenv.config();
connectDB();

const app = express();

// ✅ Step 1: Handle CORS Preflight properly
app.use(cors({
    origin: ["https://myportfolio-zeta-swart.vercel.app"], // or use "*" for open
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
}));

// ✅ Step 2: Respond to preflight OPTIONS request
app.options("*", cors()); // this is crucial!

// Parse JSON
app.use(express.json());

// Routes
app.use("/api/messages", require("./routes/messageRoutes"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});
