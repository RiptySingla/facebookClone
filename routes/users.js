const express = require("express");
const userController = require("../controllers/userController.js");
const router = express.Router();
// console.log("router is working");
router.get("/", userController.profile);
// router.use("/users", require("./users"));
module.exports = router;
