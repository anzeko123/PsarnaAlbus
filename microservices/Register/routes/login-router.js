const express = require('express');
const auth = require("../middleware/auth");

const {login, deleteLoggedUser, logout} = require('../services/login-service');

let router = express.Router();

//router.post('/post', auth, login);
router.post('/post', login);
router.post('/logout/:id', logout);
router.delete('/deleteUser/:id', deleteLoggedUser);

module.exports = router;