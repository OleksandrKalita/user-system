const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/registration", async (req, res) => {
    try {
        const { email, name, password } = req.body;

        const isUser = await User.findOne({email});
        if (isUser) {
            return res.status(400).json({message: `User with email ${email}, already exists!`});
        }

        const hashedPassword = await bcrypt.hash(password, 7);
        const user = new User({email, name, password: hashedPassword});

        await user.save();
        return res.json({message: "User has been created"});
    } catch (e) {
        console.log(e);
        res.send({message: "Server error"});
    }
})
router.post("/login", async (req, res) => {
    try {
        console.log("dfefd");
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "User was't find!"});
        }

        const isPassValid = bcrypt.compareSync(password, user.password);
        if (!isPassValid) {
            return res.status(400).json("Invalid password");
        }

        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"});
        return res.status(200).json({
            token,
            user: {
                email: user.email,
                name: user.name,
            },
        })
    } catch (e) {
        console.log(e);
        res.status(404).json({message: "Server error!"});
    }
})

module.exports = router;