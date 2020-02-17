import React from 'react';
import {NavLink} from 'react-router-dom';
let  conversations=[
    {
        id:1,
        user:{
            name:"Anton",
            avatar: "http://placehold.it/50x50"
        }
    },{
        id:2,
        user:{
            name:"Sam",
            avatar: "http://placehold.it/50x50"
        }
    }
]
function Conversation(props) {
    const {convers}=props;
    return(
        <NavLink to={`/messages/${convers.id}`} className="conv">
            <div className="avatar">
                <img src={convers.user.avatar} alt=""/>
            </div>
        <div className="user_name">{convers.user.name}</div>
        </NavLink>
    )
}
export default class Main extends React.Component{
    
    render(){
        return(
            
            <div className="message_container">
                {conversations.map(item=><Conversation convers={item}/>)}
            </div>
        )
    }
}