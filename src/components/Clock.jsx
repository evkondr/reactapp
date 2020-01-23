import React from 'react';

export default class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }
    tickTock(){
        this.setState({
            date: new Date()
        })
    }
    componentDidMount(){
        this.timerID=setInterval(()=>this.tickTock(),1000)
    }
    componentWillUnmount(){
       clearInterval(this.timerID) 
    }
    
    render(){
        return (
            <p>Time: {this.state.date.toLocaleString()}</p>
        )
    }
}