import React from 'react';

export default class Newsitems extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.news.map(item=>(<div className="newsitem">
                        <h3 className="newsitem_header">
                            {item.header}
                        </h3>
                        <div className="newsitem_content">
                            {item.content}
                        </div>
                    </div>))}
            </div>
        )
    }
}