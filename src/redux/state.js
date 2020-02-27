let  appRender=()=>{

}
let state={
    posts:[],
    news:[
        {id:1,header:'Title 1',content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nesciunt? "},
        {id:2,header:'Title 2',content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nesciunt? "},
        {id:3,header:'Title 3',content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nesciunt? "}
    ],
    newsText: "What new?"
}
export function getText(text){
    state.newsText=text;
    appRender(state);
}
export function addNews(){
    state.news.push({id:4,header:'Title 4',content: state.newsText});
    appRender(state);
}
export let subscribe=(observer)=>{
    appRender=observer
}
export default state;
