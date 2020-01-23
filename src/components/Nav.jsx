import React from 'react';
import {NavLink} from 'react-router-dom'
export default class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav>
                <ul>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                </ul>
            </nav>
        )
    }
}