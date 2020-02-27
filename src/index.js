import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './style.css';
import state from './redux/state';
import {addNews} from  './redux/state';
import {getText} from  './redux/state';
import {subscribe} from './redux/state'

export default function appRender(state){
    ReactDOM.render(<App state={state} addNews={addNews} getText={getText}/>, document.querySelector("#root"));
}
subscribe(appRender)
appRender(state)