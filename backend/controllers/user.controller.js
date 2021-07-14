const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

module.exports.register = async (req, res) => {
    try {
        console.log(req.body);
        req.body.password = md5(req.body.password);
        req.body.friends = [];
        var newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(401).json(err);
    }
};

module.exports.login = async (req, res) => {
    try {
        var user = await User.findOne({ username: req.body.username }).populate(
            "friends.user_id"
        );

        if (!user) {
            res.status(200).json({ message: "Account does not exist" });
            return;
        } else {
            if (user.password !== md5(req.body.password)) {
                res.status(200).json({ message: "Wrong password!" });
            } else {
                const accessToken = jwt.sign(
                    {
                        user: {
                            _id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email,
                        },
                    },
                    "dobadov3",
                    {
                        expiresIn: "1 day",
                    }
                );
                res.status(200).json({
                    user,
                    accessToken,
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(401).json(err);
    }
};

module.exports.getAllUser = async (req, res) => {
    try {
        var users = await User.find().populate("friends.user_id");

        res.status(200).json(users);
    } catch (error) {
        res.status(401).json(error);
    }
};

module.exports.getUserById = async (req, res) => {
    try {
        var user = await User.findById(req.params.userId).populate("friends.user_id");

        res.status(200).json(user);
    } catch (error) {
        res.status(401).json(error);
    }
};
