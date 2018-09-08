import React, { Component } from 'react';
import {Tabs} from 'antd'
import Tubiao1 from '../../components/tubiao'
import {connect} from 'react-redux'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
class ClickEventPage extends Component{
    render(){
        return(
            <div>
                {/*单击事件*/}
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1"/>
                    <TabPane tab="Tab 2" key="2"/>
                    <TabPane tab="Tab 3" key="3"/>
                </Tabs>
                <p>近一个小时</p>
                <Tubiao1 data={this.props.data}/>
            </div>
        )
    }
}
export default connect(
    state => ({...state.g2})
)(ClickEventPage)
