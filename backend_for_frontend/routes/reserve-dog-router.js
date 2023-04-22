const express = require('express');

const {all, updateOwner} = require('../services/reservation-dog-service');

let router = express.Router();

router.get('/all', all);
router.put('/updateOwner/:id/:ownerId', updateOwner);


module.exports = router;