import React from 'react';
import Header from './Header';
import Nav from './Nav'
import { BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';

export default function App(props){
    
    return(
        <div className="container">
            <Router>
                <Header />
                <div className="row">
                    <Nav />
                    <Main state={props.state}/>
                </div>
            </Router>
        </div>
        
    )
}