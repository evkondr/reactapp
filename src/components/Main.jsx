import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './Porfile';
import News from './News';
import Messages from './Messages';

export default class Main extends React.Component{

    render(){
        return(
            <div className="col-8">
                <main>
                    <Switch>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path='/messages'>
                            <Messages />
                        </Route>
                        <Route path='/news'>
                            <News />
                        </Route>
                    </Switch>
                </main>
            </div>
            
        )
    }
}