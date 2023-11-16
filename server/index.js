const express = require("express");
const app = express();
const config = require("config");
const PORT = config.get("serverPort")
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.routes");
const corsMiddleware = require("./middleware/cors.middleware.js");

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"));

        app.listen(PORT, () => {
            console.log(`Server has been run on port: ${PORT}...`);
        })
    } catch (e) {

    }
}

start();