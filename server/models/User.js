const { Schema, model } = require("mongoose");

const User = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    password: { type: String, required: true },
});

module.exports = model("User", User);