import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './Porfile';
import News from './News';
import Messages from './Messages';

export default class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        debugger;
        return(
            
            <div className="col-8">
                <main>
                    <Switch>
                        <Route path='/profile' component={Profile}/>
                            
                        <Route path='/messages' component={Messages}/>
                            
                        <Route path='/news' exact render={()=><News state={this.props.state}/>}/>
                        
                    </Switch>
                </main>
            </div>
            
        )
    }
}