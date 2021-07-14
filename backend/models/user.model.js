const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default:
            "https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg",
    },
    background: {
        type: String,
        default:
            "https://brand4u.vn/wp-content/uploads/2019/08/Facebook-TimeLine-Cover-Background.jpg",
    },
    friends: [{
        user_id: {
            type: String,
            ref: "User"
        }
    }],
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;