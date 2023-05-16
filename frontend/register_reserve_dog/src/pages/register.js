import React, {useState} from 'react';
import axios from 'axios';
import '../css/styles.css';
import Form from 'react-bootstrap/Form';

  function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      const username = event.target.username.value
      const email = event.target.email.value
      const password = event.target.password.value
      const repPassword = event.target.repPassword.value
      if (username === '' || email === '' || password === '' || repPassword === ''){
        alert("Prosim vnesite vse podatke") 
      } else {
        axios.post('http://localhost:5000/register/register', {
          username: username,
          email: email,
          password: password,
          repPassword: repPassword
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function (response) {
          console.log(response.data);
          window.location.reload();
          window.location.replace('/login')
          alert("Vnesili ste uporabnika")
          })
              .catch(function (error) {
                alert("Prišlo je do napake prosim poskusite znova")
                  console.log(`An error has accured, ${error}`)
          })
      }
    }


    return (
    <section className="forms vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
      
                    <Form onSubmit={handleSubmit}>
      
                      <div className="form-outline mb-4">
                        <Form.Control name="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
                        <label className="form-label" htmlFor="form3Example1cg">Username</label>
                      </div>
      
                      <div className="form-outline mb-4">
                      <Form.Control name="email" value={email} onChange={ev => setEmail(ev.target.value)}/>
                        <label className="form-label" htmlFor="form3Example3cg">Email</label>
                      </div>
      
                      <div className="form-outline mb-4">
                      <Form.Control name="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>
      
                      <div className="form-outline mb-4">
                      <Form.Control name="repPassword" value={repPassword} onChange={ev => setRepPassword(ev.target.value)}/>
                        <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                      </div>
      
                      <div className="d-flex justify-content-center">
                        <button variant="success" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" type="submit">Register</button>
                      </div>
      
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                          className="fw-bold text-body"><u>Login here</u></a></p>
      
                    </Form>
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Register;