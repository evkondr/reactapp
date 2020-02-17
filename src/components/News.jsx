import React from 'react';
import Newsitems from './Newsitems';

export default class News extends React.Component{

    render(){
        return(
            <div>
                <Newsitems newsheader="Новость 1" newscontent="Контент 1"/>
            </div>
        )
    }
}