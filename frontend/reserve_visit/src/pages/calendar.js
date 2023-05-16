import React, {useState} from 'react';
import axios from 'axios';
import '../css/styles.css';
import Form from 'react-bootstrap/Form';

const LOCAL_STORAGE_KEY = 'userId'

  function Calendar() {
    const userId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const [name, setName] = useState("");
    const [dateOfVisit, setVisit] = useState("");
    const [reserverId, setReserver] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      const name = event.target.name.value
      const dateOfVisit = event.target.dateOfVisit.value
      const reserverId = event.target.reserverId.value
     
      if (name === '' || dateOfVisit === ''){
        alert("Prosim vnesite vse podatke") 
      } else {
        axios.post('http://localhost:5000/reservationDate/addReservation', {
          nameOfVisitor: name,
          dateOfVisit: dateOfVisit,
          userId: userId,
          reserverId: reserverId
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(function (response) {
          console.log(response.data);
          window.location.reload();
          window.location.replace('/')
          alert("You reserved your visit")
          })
              .catch(function (error) {
                alert("An error has accured")
                  console.log(`An error has accured, ${error}`)
          })
          
      }
    }
    /*
    const validate = () => {
      return dateOfVisit.length;
    };
    useEffect(() => {
      const isValid = validate();
      setValid(isValid);
    }, [dateOfVisit]);
*/
    function handleChange(event) {
      const dateOfVisit = event.target.value
      //console.log(dateOfVisit);
      
      axios.get('http://localhost:5000/reservationDate/all', {
      })
      .then(function (response) {
        for(const data of response.data) {
          if(data.dateOfVisit === dateOfVisit){
            console.log('je že zasedeno');
            setVisit()
          } else {
            setVisit(dateOfVisit)
            console.log('ni zasedeno');
          }
        }
        


        })
            .catch(function (error) {
              alert("An error has accured")
                console.log(`An error has accured, ${error}`)
        })
        
    }

    //if (!result) return null;
    return (
      <section className="forms vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Reserve a visit</h2>
    
                  <Form onSubmit={handleSubmit}>
    
                    <div className="form-outline mb-4">
                      <Form.Control name="name" value={name} onChange={ev => setName(ev.target.value)}/>
                      <label className="form-label" htmlFor="form3Example1cg">Name</label>
                    </div>
    
                    <div className="form-outline mb-4">
                    <Form.Control name="dateOfVisit" value={dateOfVisit} onInput={handleChange} onChange={ev => setVisit(ev.target.value)}/>
                      <label className="form-label" htmlFor="form3Example3cg" placeholder="1.1.1970">Date of visit</label>
                    </div>
                    <div className="form-outline mb-4">
                    <Form.Control name="reserverId" value={reserverId} onChange={ev => setReserver(ev.target.value)}/>
                      <label className="form-label" htmlFor="form3Example3cg" placeholder="1.1.1970" >Dog id<small> (if you already adopted a dog)</small></label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button variant="success" disabled={!dateOfVisit} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" type="submit">Reserve visit</button>
                    </div>
                    <div className="back d-flex justify-content-center"><a href="/">Go Back</a></div>
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


export default Calendar;