import React from 'react';
import Header from './Header';
import Nav from './Nav'
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
export default function App(){
    return(
        <div className="wrap">
            <Router>
            <Header />
            <Nav />
            </Router>
            
        </div>
        
    )
}