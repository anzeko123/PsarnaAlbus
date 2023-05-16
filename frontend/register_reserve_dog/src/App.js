
import React from 'react';
import './css/App.css';
import Navbar from './header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Logout from './redirects/logout.js';
import Delete from './redirects/delete.js';
import MicroFrontend from "./microFrontend";

const {
    REACT_APP_VISIT_HOST: visitHost,
  } = process.env;

function Visit({ history }) {
return <MicroFrontend history={history} host={visitHost} name="Visit" />;
}

function VisitComponent({ history }) {
    return (
      <div>
        <Visit />
      </div>
    );
}

function App() {
return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/delete' element={<Delete/>} />
        <Route path='/visit' element={<VisitComponent/>} />
    </Routes>
    </BrowserRouter>
);
}
  
export default App;