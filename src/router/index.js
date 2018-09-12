import React, { Component } from 'react';
import ClickEventPage from '../clickEventPage/index'
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
            default:
                return (
                    <div>没有页面</div>
                )
        }
    }
}
export default Routers
