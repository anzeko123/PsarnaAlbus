const fetch = require('node-fetch');
const querystring = require('querystring');

const all = async (req, res) => {
    const response = await fetch(`http://reservation-date:8000/reservationDate/all`)
    const responseData = await response.json();
    
    res.send(responseData);
};
const addReservation = async (req, res) => {
    const dateOfVisit = req.body.dateOfVisit
    const userId =  req.body.userId
    const nameOfVisitor = req.body.nameOfVisitor
    const reserverId = req.body.reserverId
    if(dateOfVisit == '' || userId == '' || nameOfVisitor == '' || reserverId == ''){
        res.send({"status": "prosim vnseite vsa polja"})
    } else {
        const data = {
            dateOfVisit: dateOfVisit,
            userId: userId,
            nameOfVisitor: nameOfVisitor,
            reserverId: reserverId
        }
    
          await fetch('http://reservation-date:8000/reservationDate/add', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
          });
          //const responseData = await response.json();
          //console.log(response)
        res.send({"success": `Rezervirali ste termin za: ${dateOfVisit}`});
    }
    
};
const updateReservation = async (req, res) => {
    const visitId = req.params.visitId;
    const dateOfVisit = req.params.dateOfVisit;

    if(!req.params) {
        res.send({"error": "Prosim vnesite vse podatke"})
    } else {
        const response = await fetch(`http://reservation-date:8000/reservationDate/update/${visitId}/${dateOfVisit}`, {
            method: 'PUT', 
        });
          
        res.send({"success": `Obisk spremenjen na ${dateOfVisit}}`});
    }


    
};

module.exports = {all, addReservation, updateReservation};