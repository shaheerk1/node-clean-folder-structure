const router = require("express").Router();

const authController = require("../controllers/UserController.js");


router.post("/register", authController.register);
router.get("/getAll", authController.getAllUsers);


module.exports = router;
