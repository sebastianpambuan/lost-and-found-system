const express = require("express");

const router = express.Router();

const controller = require("../../controllers/auth/controller");

router.get("/register", controller.showRegister);
router.post("/register", controller.register);

router.get("/login", controller.showLogin);
router.post("/login", controller.login);

module.exports = router;
