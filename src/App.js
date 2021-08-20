import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Calendario } from './components/Calendario/Calendario';
import { Formulario } from './components/Formulario/Formulario';
import { Tabla } from './components/Tabla/Tabla';
import { Footer } from './shared/Footer/Footer';
import { Navbar } from './shared/Navbar/Navbar';

import './App.css'

export const App = () => {
  return (
    <Router>
      <div>

      <Navbar />

      <div className="container">

      <Switch>
        <Route exact path="/" component={Formulario}/>
        <Route exact path="/registro" component={Tabla}/>
        <Route exact path="/calendario" component={Calendario}/>
        <Redirect to="/" />
      </Switch>
      
      </div>

      <Footer />

      </div>
    </Router>
  )
}
