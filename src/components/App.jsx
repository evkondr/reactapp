import React from 'react';
import Header from './Header';
import Sidebar from './sidebar/Sidebar'
import { BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';

export default function App(props){
    
    return(
        <div className="container">
            <Router>
                <Header />
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Main state={props.state} addNews={props.addNews}/>
                    </div>   
                </div>
            </Router>
        </div>
        
    )
}