const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");

route.post("/register", register);
route.post("/login", login);

module.exports = router;
