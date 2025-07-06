const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // for parsing application/json

app.use("/api/messages", require("./routes/messageRoutes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});
