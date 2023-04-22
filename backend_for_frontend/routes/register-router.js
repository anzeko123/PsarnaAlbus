const express = require('express');

const {register, login, deleteUser, logout, reserveDog} = require('../services/register-service');

let router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout/:id', logout);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;