const Post = require("../models/post.model");
const _ = require("lodash");

module.exports.getAllPost = async (req, res) => {
    try {
        const posts = await Post.find().populate("user_id").sort({ _id: -1 });

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.getPostById = async (req, res) => {
    const { userId } = req.params;

    try {
        const post = await Post.find({ user_id: userId })
            .populate("user_id")
            .sort({ _id: -1 });

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);

        const data = await Post.findById(newPost._id).populate("user_id");

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.deletePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findByIdAndDelete(postId);

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.updatePost = async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);

        _.extend(post, req.body);

        post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};
