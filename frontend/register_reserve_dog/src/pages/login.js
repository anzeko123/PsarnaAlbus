import React, {useState} from 'react';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import '../css/styles.css';

const LOCAL_STORAGE_KEY = 'userId'

//import {HashRouter} from "react-router-dom";
  function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      const username = event.target.username.value
      const password = event.target.password.value

      if (username === '' || password === ''){
        alert("Prosim vnesite vse podatke") 
      } else {
        axios.post('http://localhost:5000/register/login', {
          username: username,
          password: password,
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function (response) {
          if(response.data.error === 'Prijava ni uspela') {
            alert("Username or password is incorrect")
          } else {
            window.location.replace('/');
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response.data.user._id)) //tukaj shranimo podatke v localStorage
          }
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
                    <h2 className="text-uppercase text-center mb-5">Login</h2>
      
                    <Form onSubmit={handleSubmit}>
      
                      <div className="form-outline mb-4">
                      <Form.Control name="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
                        <label className="form-label" htmlFor="form3Example1cg">Username</label>
                      </div>
      
                      <div className="form-outline mb-4">
                      <Form.Control name="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>
      
                      <div className="d-flex justify-content-center">
                      <button variant="success" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" type="submit">Login</button>
                      </div>
      
                      <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/register"
                          className="fw-bold text-body"><u>Register here</u></a></p>
      
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


export default Login;