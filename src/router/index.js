import React, { Component } from 'react';
import G2 from '../components/G2'
import ClickEventPage from '../pages/clickEventPage/index'
import Nav from '../components/nav'
class Routers extends Component{
    render(){
        // console.log(this.props.match.url);
        switch (this.props.match.url) {
            case '/g2':
                return(
                    <G2/>
                );
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
                    <div>没有页面meiyouyemian</div>
                )
        }
    }
}
export default Routers
