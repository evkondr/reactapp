import React from 'react';
import Newsitems from './Newsitems';

export default class News extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        debugger;
        return(
            <div>
                <Newsitems news={this.props.state.news}/>
            </div>
        )
    }
}