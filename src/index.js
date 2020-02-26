import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './style.css';
import state from './redux/state';
import appRender from './render'

appRender(state)