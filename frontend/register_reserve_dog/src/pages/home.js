import React, {useEffect, useState} from 'react';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';

//import {HashRouter} from "react-router-dom";

const LOCAL_STORAGE_KEY = 'userId'

  function Home() {
    const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const [result, setResult] = useState('')

    useEffect(() =>{
      axios.get('http://localhost:5000/reserveDog/all', {
      })
      .then(function (response) {
        setResult(response.data)
        })
            .catch(function (error) {
              alert("Prišlo je do napake prosim poskusite znova")
                console.log(`An error has accured, ${error}`)
        })
    }, [])

    function handleAdoptDog(id){
      let storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      //storedUser = storedUser.replace('"','');
      console.log(storedUser)
      console.log(id)
      const dogId = id.toString();
      
      axios.put(`http://localhost:5000/reserveDog/updateOwner/${dogId}/${storedUser}`, {
      })
      .then(function (response) {
        console.log(response.data)
      
      /*
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
              */
      })
      
    }
    

    if (!result) return null;
    return (
      <div>
      {storedUser !== null ? (
        <main className="container"><br></br><br></br><br></br>
        <div className="row">
          <div className ="d-flex justify-content-center">
            <div className="coll-span-3">
              <h1>Choose a dog you want to adopt</h1>
            </div>
          </div>
        </div>
        <div className="row">

        {result.map((result) => (
          <div key={result.id} className="coll-sm-3">
            <div className="card adopt-card">
              <div className="card-body">
                <h5 className="card-title">{result.dogName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Rojen: {result.dob}</h6>
                <p className="card-text">Pasma: {result.breed}</p>
                {result.reserverId === '0' ? (
                //<form action="/adopt" method="GET">
                  <button type="submit" className="adopt-button" value={result.id} onClick={() => handleAdoptDog(result.id)}>Adopt</button>
                //</form>
                ) : (
                <button className="adopt-button-taken">Already Adopted</button>
                 )}
                
              </div>
            </div>
          </div>
        ))}

        </div>
        </main>
      ) : (
        <main className="container"><br></br><br></br><br></br>
        <div className ="d-flex justify-content-center">
          <div className="coll-span-3">
            <h1>Please login if you want to adopt a dog</h1>
          </div>
        </div>
        </main>
      )}
        
      </div>
      /*
      <HashRouter>
      <div className="row justify-content-center">
        <div className="col-6">
          <PostData />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <GetData />
        </div>
      </div>
      </HashRouter>*/
    );
  }
/*
        {result.map((result) => (
          <div className="coll-sm-3">
            <div className="card adopt-card">
              <div className="card-body">
                <h5 className="card-title">{result.dogName}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="card-link">Adopt</a>
              </div>
            </div>
          </div>
        ))}
        */

export default Home;