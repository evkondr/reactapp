import React from 'react';
import Newsitems from './Newsitems';

export default class News extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        
        return(
            
            <div className='news-block'>
                <h2 className='block-header'>News</h2>
                <form action="" method='post' className='news-block__form'>
                    <textarea name="news" id="" className='news-block__text'></textarea>
                    <input type="submit" value="Add news"/>
                </form>
                <Newsitems news={this.props.state.news}/>
            </div>
        )
    }
}