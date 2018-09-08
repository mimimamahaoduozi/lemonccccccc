import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reacts from './router'
import Nav from './components/nav'

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Nav/>
                    <Route path="/:id" component={Reacts} />
                </div>
            </Router>
        )
    }
}
export default App;
