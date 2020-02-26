import appRender from '../render';
let state={
    posts:[],
    news:[
        {id:1,header:'Title 1',content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nesciunt? "},
        {id:2,header:'Title 2',content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nesciunt? "},
        {id:3,header:'Title 3',content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nesciunt? "}
    ]
}
export function addNews(text){
    state.news.push({id:4,header:'Title 4',content: text});
    appRender(state);
}
export default state;
