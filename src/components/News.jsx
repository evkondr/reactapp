import React from 'react';
import Newsitems from './Newsitems';

export default function News(props){
    const textarea=React.createRef();
    const addNews=(e)=>{
        e.preventDefault();
        props.addNews();
    }
    const onTextChange=()=>{
        let text=textarea.current.value;
        props.getText(text)
    }
    return(
        <div className='news-block'>
            <h2 className='block-header'>News</h2>
            <form action="" method='post' className='news-form'>
                <textarea onChange={onTextChange} name="news" id="" className='news-form__text' ref={textarea} value={props.state.newsText}/>
                <input onClick={addNews} type="submit" value="Add news"/>
            </form>
            <Newsitems news={props.state.news}/>
        </div>
    )
}
