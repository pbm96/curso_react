import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './componentes/navigation'

function App() {
    return ( 
        <div className = "App" >
            <Navigation titulo="Mi primera navegacion"/>
            <img src = { logo } className = "App-logo" alt = "logo"  />
        </div>
    );
}

export default App;