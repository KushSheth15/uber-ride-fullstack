const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post('/reister',[
    body('email').isEmail().withMessage('Invalid Email')
], captainController.registerCaptain);

module.exports = router;