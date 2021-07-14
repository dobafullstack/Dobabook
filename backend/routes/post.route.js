const express = require("express");
const router = express.Router();
const controller = require("../controllers/post.controller");

router.get("/", controller.getAllPost);
router.get("/:userId", controller.getPostById);
router.post("/create", controller.createPost);
router.get("/delete/:postId", controller.deletePost);
router.post("/update/:postId", controller.updatePost);

module.exports = router;
