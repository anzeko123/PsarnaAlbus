import React from "react";
//import { BrowserRouter, Route, Link } from "react-router-dom";
import './css/styles.css';

const LOCAL_STORAGE_KEY = 'userId'



function Header() {
    let storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    function handleDelete() {
        window.confirm("Are you sure you want to delete your account!")
        /*
        if (window.confirm("Are you sure you want to delete your account!") === true) {
            window.location.replace('/delete');
          } else {
            window.location.replace('/');
          }
          */
    }
  return (
    <div>
    {storedUser === null ? (
    <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
            <div className="container"><a href="/" className="title navbar-brand font-weight-bold">PsarnaAlbus</a>
                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
                
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/" className="nav-link font-weight-bold">Home</a></li>
                        <li className="nav-item"><a href="login" className="nav-link font-weight-bold">Login</a></li>
                        <li className="nav-item"><a href="register" className="nav-link font-weight-bold">Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    ):(    
    <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
            <div className="container"><a href="/" className="title navbar-brand font-weight-bold">PsarnaAlbus</a>
                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
                
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/" className="nav-link font-weight-bold">Home</a></li>
                        <li className="nav-item"><a href="logout" className="nav-link font-weight-bold">Logout</a></li>
                        <li className="nav-item"><a href="delete" onClick={handleDelete} className="nav-link font-weight-bold">Delete Account</a></li>
                        <li className="nav-item"><a href="visit" className="nav-link font-weight-bold">Reserve a visit</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)}
    </div>
  );
}

export default Header;