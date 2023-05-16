import React from 'react';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import '../css/styles.css';

const LOCAL_STORAGE_KEY = 'userId'

function Logout() {
    let storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        storedUser = storedUser.replace('"','');
        console.log('test')
        //localStorage.removeItem(LOCAL_STORAGE_KEY)
        //alert('Do you really want to logout?')
        axios.post(`http://localhost:5000/register/logout/${storedUser}`, {
          })
          .then(function (response) {
            console.log(response.data)
            if(response.data.error === 'Neuspešna odjava') {
              alert("En error accured")
            } else {
                localStorage.removeItem(LOCAL_STORAGE_KEY)
                window.location.replace('/');
                console.log('test')
            }
            })
                .catch(function (error) {
                  alert("Prišlo je do napake med odjavo")
                  window.location.replace('/');
                    console.log(`An error has accured, ${error}`)
            })

    return (
        <div></div>
    );
  }


export default Logout;
//window.location.replace('/');