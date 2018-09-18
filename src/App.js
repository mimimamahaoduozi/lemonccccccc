import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ClickEventPage from './clickEventPage'

class App extends Component{

    render(){
        return(
            <Router>
                <div>
                    <ClickEventPage/>
                </div>
            </Router>
        )
    }
}
export default App;
