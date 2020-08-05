
import React from 'react';


import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import { Home } from './components/Home';
import {Search} from "./components/Search"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar bg="light" expand="lg" className="header">
  <Navbar.Brand href="/home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/home">Home</Nav.Link> 
      <Nav.Link href="/search">Search movies</Nav.Link>
 
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
<Switch>
  <Route component={Home} path="/home"></Route>
  <Route  component={Search} path="/search"/>
  <Redirect from="/" to="/home"></Redirect>
</Switch>
    </BrowserRouter>
    </>
  );
  
}


export default App;
