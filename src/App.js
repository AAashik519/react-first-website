 import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 

import Home from './Component/Home/Home';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Redirect, Route, Switch } from 'react-router';
import About from './Component/About';
import Service from './Component/Home/Service';
import Contacr from './Component/Home/Contacr';
import Navbar from './Component/Home/Navbar';
import Footer from './Component/Home/Footer';


function App() {
  return (
    <div  >
       
       <Router>



       <Navbar /> 
       <Switch>
        
       <Route  path='/home'>
          <Home />
        </Route>
        <Route  path='/about'>
          <About />
        </Route>
        <Route  path='/service'>
       <Service />
        </Route>
        <Route path='/contact'>
          <Contacr />
        </Route>
        <Route  path='/'>
          <Home />
        </Route>
        <Redirect to ='/' />

      </Switch>


      {/* <Service /> 
      <About />
      <Contacr /> */}
     
    </Router>
    <Footer />
     
 
     

    </div>
  );
}

export default App;
