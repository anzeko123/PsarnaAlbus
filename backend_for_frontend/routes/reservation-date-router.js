const express = require('express');

const {all, addReservation, updateReservation} = require('../services/reservation-date-service');

let router = express.Router();

router.get('/all', all);
router.post('/addReservation', addReservation);
router.put('/updateReservation/:visitId/:dateOfVisit', updateReservation);


module.exports = router;
