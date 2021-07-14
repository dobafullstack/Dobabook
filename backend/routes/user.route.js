const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/login", controller.login);
router.post("/register", controller.register);
router.get("/", controller.getAllUser);
router.get("/:userId", controller.getUserById);

module.exports = router;
