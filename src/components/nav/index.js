import React, { Component } from 'react';
import { Menu, Icon, DatePicker ,Button,TimePicker,Modal,Input} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.min.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './index.css'

const dateFormat = 'YYYY/MM/DD';
class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
            visible: false
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    onChange = (time) => {
        console.log(time);
        this.setState({ value: time });
    };
    render(){
        return(
            <div className={'nav'}>
                <div className={'nav-left'}>
                    <Menu
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Link to={'/click'}><h3>全部告警</h3></Link>
                        </Menu.Item>
                        <Menu.Item key="app">
                            <Link to={'/clickeventpage'}><h3>单击事件</h3></Link>
                        </Menu.Item>
                        <Menu.Item key="jiaoyi">
                            <Link to={'/click'}><h3>交易事件</h3></Link>
                        </Menu.Item>
                        <Menu.Item key="huabei">
                            <Link to={'/click'}><h3>基础设施事件</h3></Link>
                        </Menu.Item>
                        <Menu.Item key="alipay">
                            <Link to={'/click'}><h3>其他自定义事件</h3></Link>
                        </Menu.Item>
                    </Menu>
                    <a onClick={this.showModal}><Icon type="plus-square" style={{fontSize:'24px'}} /></a>

                    <Modal
                        title="添加事件"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Input placeholder="事件名" style={{marginBottom:'20px'}}/>
                        <Input placeholder="啥啥啥" />
                    </Modal>
                </div>
                <div  className={'selectDate'}>
                    <span >选择时间：<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} /></span>
                    <span> <TimePicker value={this.state.value} onChange={this.onChange} /></span>
                    <span><Button type="primary">回放</Button></span>
                </div>
            </div>
        )
    }
}
export default Nav
