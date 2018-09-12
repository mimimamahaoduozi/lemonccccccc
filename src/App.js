import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reacts from './router'
import Nav from './components/nav'

class App extends Component{
    state={
        //事件类型
        eventData:{
            type:'',
            subType:'',
            from:'',
            to:''
        }
    };
    changeEventData=(eventData)=>{
        this.setState({
            eventData:eventData
        })
    }

    render(){
        return(
            <Router>
                <div>
                    <Nav changeEventData={this.changeEventData}/>
                    <Route path="/:id" component={Reacts} />
                </div>
            </Router>
        )
    }
}
export default App;
