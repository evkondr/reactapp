import React from 'react';
import Nav from './Nav';
export default class Sidebar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <aside>
                <Nav/>
            </aside>
        )
    }
}