const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user_id: {
        type: String,
        ref: "User",
        required: true,
    },
    dateCreate: {
        type: Date,
        default: new Date()
    },
    text_content: {
        type: String,
        default: ''
    },
    image_link: {
        type: String,
        required: false,
        default: ''
    },
    like_count: {
        type: Number,
        default: 0
    },
    favorite_count: {
        type: Number,
        default: 0 
    },
    comment: {
        type: Array,
        default: []
    }
});

const Post = mongoose.model("Post", postSchema, "posts");

module.exports = Post;
