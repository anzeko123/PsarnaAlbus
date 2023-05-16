import React from 'react';
import axios from 'axios';
import '../css/styles.css';

const LOCAL_STORAGE_KEY = 'userId'

function Delete() {
    let storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        storedUser = storedUser.replace('"','');
        console.log(storedUser)
        axios.delete(`http://localhost:5000/register/deleteUser/${storedUser}`, {
          })
          .then(function (response) {
            console.log(response.data)
            if(response.data.error === 'Prišlo je do napake med izbrisom') {
                alert("An error accured while deleting your accunt")
            } else {
                localStorage.removeItem(LOCAL_STORAGE_KEY)
                window.location.replace('/');
            }
            })
                .catch(function (error) {
                  alert("An error accured while deleting your accunt")
                  window.location.replace('/');
                    console.log(`An error has accured, ${error}`)
            })

    return (
        <div></div>
    );
  }


export default Delete;