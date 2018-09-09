import React, { Component } from 'react';
import {Tabs,Icon} from 'antd'
import Tubiao1 from '../../components/tubiao'
import {connect} from 'react-redux'
import './index.css'
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
                <ul className={'menu'}>
                    <li>告警对象信息<Icon type="filter" theme="outlined" style={{fontSize:'20px'}}/></li>
                    <li>应用名</li>
                    <li>告警类型</li>
                    <li>告警子类型</li>
                    <li>告警详情</li>
                    <li>告警开始时间</li>
                    <li>告警处理时间</li>
                    <li>告警状态</li>
                    <li>告警处理人</li>
                    <li>相关变更</li>
                    <li>操作</li>
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({...state.g2})
)(ClickEventPage)
