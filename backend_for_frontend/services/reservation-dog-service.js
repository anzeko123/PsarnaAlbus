const fetch = require('node-fetch');

const all = async (req, res) => {
    const response = await fetch(`http://reservation:9000/reservation/all`)
    const responseData = await response.json();
    
    res.send(responseData);
};
const updateOwner = async (req, res) => {
    const id = req.params.id;
    const ownerId = req.params.ownerId;

    const response = await fetch(`http://reservation:9000/reservation/updateOwner?id=${id}&ownerId=${ownerId}`, {
      method: 'PUT', 
      //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
  
    const responseData = await response.json();
    
    res.send(responseData);
};

module.exports = {all, updateOwner};