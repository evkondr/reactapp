import React from 'react';

export default class Newsitems extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="newsitem">
                <h3 className="newsitem_header">
                    {this.props.news.newsheader}
                </h3>
                <div className="newsitem_cintent">
                    {this.props.news.newscontent}
                </div>
            </div>
        )
    }
}