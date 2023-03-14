const express = require('express');
const {register, getAll} = require('../services/register-service');

let router = express.Router();

router.get('/getAll', getAll);
router.post('/post', register);

module.exports = router;