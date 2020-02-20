import React from 'react';
import Header from './Header';
import Sidebar from './sidebar/sidebar'
import { BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';

export default function App(props){
    
    return(
        <div className="container">
            <Router>
                <Header />
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-8">
                        <Main state={props.state}/>
                    </div>   
                </div>
            </Router>
        </div>
        
    )
}