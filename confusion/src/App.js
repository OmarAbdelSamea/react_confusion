import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'

import './App.css';


function App() {
  return (
    <div>
    <Navbar dark color="info">
      <div className="container">
        <NavbarBrand href="/">React First</NavbarBrand>
      </div>
    </Navbar>
    <Menu />
    </div>
  );
}

export default App;
