import React, { Component } from 'react';
import ClickEventPage from '../pages/clickEventPage/index'
import Nav from '../components/nav'
class Routers extends Component{
    render(){
        // console.log(this.props.match.url);
        switch (this.props.match.url) {
            case '/clickeventpage':
                return(
                    <div>
                        <ClickEventPage/>
                    </div>

                );
            case '/ziye':
                return(
                    <Nav/>
                );
            default:
                return (
                    <div>没有页面</div>
                )
        }
    }
}
export default Routers
