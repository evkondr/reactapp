import React from 'react';
import Newsitems from './Newsitems';

export default function News(props){
    const textarea=React.createRef();
    let addNews=(e)=>{
        e.preventDefault();
        let text=textarea.current.value;
        props.addNews(text);
    }
    return(
        <div className='news-block'>
            <h2 className='block-header'>News</h2>
            <form action="" method='post' className='news-form'>
                <textarea name="news" id="" className='news-form__text' ref={textarea}></textarea>
                <input onClick={addNews} type="submit" value="Add news"/>
            </form>
            <Newsitems news={props.state.news}/>
        </div>
    )
}
