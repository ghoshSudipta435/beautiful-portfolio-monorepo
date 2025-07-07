// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./db");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json()); // for parsing application/json

// app.use("/api/messages", require("./routes/messageRoutes"));

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT} 🚀`);
// });


// Load core modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load custom modules
const connectDB = require("./db");

// Load environment variables
dotenv.config();

// Connect to MongoDB Atlas
connectDB();

// Initialize Express app
const app = express();

// Enable CORS – allow requests from your frontend (replace with your actual Vercel frontend URL)
app.use(cors({
    origin: "https://myportfolio-zeta-swart.vercel.app", // ✅ Replace with your actual frontend deployment URL
    methods: ["GET", "POST"],
}));

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use("/api/messages", require("./routes/messageRoutes"));

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});
