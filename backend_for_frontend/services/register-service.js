const fetch = require('node-fetch');
const querystring = require('querystring');

const register = async (req, res) => {
    const data = querystring.stringify({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        repPassword: req.body.repPassword
      });
    
      const response = await fetch('http://register:4000/register/post', {
        method: 'POST', 
        body: data, 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
    
      const responseData = await response.json();

    res.send(responseData);
};
const login = async (req, res) => {
        const data = querystring.stringify({
        username: req.body.username,
        password: req.body.password
      });
    
      const response = await fetch('http://register:4000/login/post', {
        method: 'POST', 
        body: data, 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      });
    
      const responseData = await response.json();
      
    res.send(responseData);
};
const logout = async (req, res) => {
  const id = req.params.id;

  const response = await fetch(`http://register:4000/login/logout/${id}`, {
    method: 'POST', 
    //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });

  const responseData = await response.json();
  
  res.send(responseData);
};
const deleteUser = async (req, res) => {
  const id = req.params.id;

  const response = await fetch(`http://register:4000/login/deleteUser/${id}`, {
    method: 'DELETE', 
    //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });

  const responseData = await response.json();
  
  res.send(responseData);
};

module.exports = {register, login, logout, deleteUser};