import React, { Component } from 'react';
import { Menu, Icon, DatePicker ,Button,TimePicker} from 'antd';
import moment from 'moment';

import 'antd/dist/antd.min.css';
import {Link} from 'react-router-dom'
import './case.css'

const dateFormat = 'YYYY/MM/DD';
class Nav extends Component{
    state = {
        value: null,
    };
    onChange = (time) => {
        console.log(time);
        this.setState({ value: time });
    };
    render(){
        return(
            <div className={'nav'}>
                <Menu
                mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Link to={'click'}>全部告警</Link>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Link to={'clickeventpage'}>单击事件</Link>
                    </Menu.Item>
                    <Menu.Item key="jiaoyi">
                        <Link to={'click'}>交易事件</Link>
                    </Menu.Item>
                    <Menu.Item key="huabei">
                        <Link to={'click'}>基础设施事件</Link>
                    </Menu.Item>
                    <Menu.Item key="alipay">
                        <Link to={'click'}>其他自定义事件</Link>
                    </Menu.Item>
                    <a href="#"><Icon type="plus-square" theme="outlined" style={{fontSize:'24px'}}/></a>
                </Menu>
                <div  style={{marginLeft:'100px', position:'absolute'}} className={'selectDate'}>
                    <span >选择时间：<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} /></span>
                    <span> <TimePicker value={this.state.value} onChange={this.onChange} /></span>
                    <span><Button type="primary">回放</Button></span>
                </div>
            </div>
        )
    }
}
export default Nav
