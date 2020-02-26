import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {addNews} from  './redux/state';


export default function appRender(state){
    ReactDOM.render(<App state={state} addNews={addNews}/>, document.querySelector("#root"));
}
