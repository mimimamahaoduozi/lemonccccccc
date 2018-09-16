import React, { Component } from 'react';
import { Table,Menu, Icon, DatePicker ,Button,TimePicker,Modal,Input} from 'antd'
import { Chart, Tooltip, Geom } from 'bizcharts'
import 'antd/dist/antd.min.css'
import {getBgdata,getG2data} from '../api/index'
import './index.css'
import ajax from '../api/fetch'


//使用Mock
require('../mock');
//图标使用的
const scale = {
    month: {alias: 'Month',},
    count: {alias: 'Sales',},
};

const dateFormat = 'YYYY/MM/DD';
//改变时间样式
Date.prototype.toLocaleString = function() {
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
};

//表格前面颜色块
const typeColor=[
    '#a00',
    '#0a0',
    '#b70',
];

//定义表格形态
const columns = [
    {
        title: '',
        dataIndex: 'eventStatus',
        render(a){
            return(<p style={{background:typeColor[parseInt(a)]}}/>)
        }
    },
    {
        title: '告警对象信息',
        dataIndex: 'alarmRate',
        filters: [{
            text: 'Joe',
            value: 'Joe',
        }, {
            text: 'Jim',
            value: 'Jim',
        }],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
        title: '应用名',
        dataIndex: 'appName',
        filters: [{
            text: 'Joe',
            value: 'Joe',
        }, {
            text: 'Jim',
            value: 'Jim',
        }],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
        title: '告警类型',
        dataIndex: 'type',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: '告警子类型',
        dataIndex: 'subType',
        filters: [{
            text: 'Joe',
            value: 'Joe',
        }, {
            text: 'Jim',
            value: 'Jim',
        }],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
        title: '告警详情',
        dataIndex: 'eventDetail',
    },
    {
        title: '告警开始时间',
        dataIndex: 'gmtCreate',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        render: (a) => new Date(a).toLocaleString()
    },
    {
        title: '告警处理时间',
        dataIndex: 'gmtOccur',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        render: (a) => new Date(a).toLocaleString()
    },
    {
        title: '告警状态',
        dataIndex: 'eventStatus1',
        filters: [{
            text: 'Joe',
            value: 'Joe',
        }, {
            text: 'Jim',
            value: 'Jim',
        }],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
        title: '告警处理人',
        dataIndex: 'operator',
    },
    {
        title: '相关变更',
        dataIndex: 'address',
    },
    {
        title: '操作',
        dataIndex: 'address1',
    }

];





class ClickEventPage extends Component{

    constructor(props){
        super(props);
        this.state={


            // 数据的(以后通过ajax获取的数据放在这里)
            G2data:{},
            Bgdata:[],
            activeType:[],
            showBgdata:[],
            typeColor:['#a00', '#0a0', '#b70'],

            //下面是导航的
            value: null,
            visible: false,

    //ajax请求参数
            //当前时间
            time:new Date().getTime(),
            //当前事件类型
            eventType:'',
        };
    }




    //表格change
    // onChange=(pagination, filters, sorter) => {
    //     console.log('params', pagination, filters, sorter);
    // };

    //选择类型
    callback=(e) =>{
        // console.log(e.target.type);
        let newActiveType=[];
        let type=parseInt(e.target.type);
        if (type === 0) {
            if (this.state.activeType.indexOf(type)>=0) {
                this.setState({
                    activeType:[],
                    showBgdata:[]
                })
            }else{
                this.setState({
                    activeType:[0],
                    showBgdata: this.state.Bgdata
                })
            }
        } else {
            if (this.state.activeType.indexOf(type)>=0) {
                this.state.activeType.pop(type);
            }else{
                this.state.activeType=Array.from(new Set([...this.state.activeType,type]));
            }
            this.setState({
                showBgdata:this.state.Bgdata.filter((a) => {
                    return this.state.activeType.indexOf(a.activeType)>=0
                }),
                activeType:this.state.activeType
            })
        }

    };

    //控制模态框
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    //模态框点了确定
    handleOk = (e) => {
        console.log(e.value);
        this.setState({
            visible: false,
        });
    };

    //模态框点了取消
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    //时间选择框发生改变
    onTimeChange = (time) => {
        let setTime=new Date(time._d).getTime();
        console.log(typeof setTime);
        console.log(this.state);
        this.setState({
            time:setTime
        });
    };

    //改变当前事件类型
    changeEventType = (e) =>{
        console.log(e.key);
        this.setState({
            eventType:e.key.toString()
        })
    };

    //点击回放
    getdata = ()=>{
        //ajax请求
        //请求bgdata
        ajax('/bgdata')
            .then(res => {
            console.log(res);
            this.setState({
                Bgdata:res.data
            })
        });
        //请求g2data
        ajax('http://localhost:3000/array',{
            eventType:this.state.eventType,
            from:this.state.time-3600000,
            to:this.state.time,
            subType:'先写死',
        })
            .then(res => {
            //这里的你要放到success里面
            console.log(res);
            //改变请求到的数据的格式
            let data=res.data;
            let newG2Data=[];
            for (let key in data) {
                newG2Data.push({
                    date:key,
                    value:data[key]
                })
            }
            //存到state里面
            this.setState({
                G2data:newG2Data
            })
        });
    };
    componentDidMount(){


    }
    render(){
        return(
            <div>
                {/*导航*/}
                <div className={'nav'}>
                    <div className={'nav-left'}>
                        <Menu
                            mode="horizontal"
                        >
                            <Menu.Item key="ALL"  onClick={this.changeEventType}>
                                <h3>全部告警</h3>
                            </Menu.Item>
                            <Menu.Item key="EVENT_TYPE" onClick={this.changeEventType}>
                                <h3>单击事件</h3>
                            </Menu.Item>
                            <Menu.Item key="TRADE_TYPE" onClick={this.changeEventType}>
                                <h3>交易事件</h3>
                            </Menu.Item>
                            <Menu.Item key="EVENT_TYPE1" onClick={this.changeEventType}>
                                <h3>基础设施事件</h3>
                            </Menu.Item>
                            <Menu.Item key="EVENT_TYPE2" onClick={this.changeEventType}>
                                <h3>其他自定义事件</h3>
                            </Menu.Item>
                        </Menu>
                        <a onClick={this.showModal}><Icon type="plus-square" style={{fontSize:'24px'}} /></a>

                        {/*模态框*/}
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
                    {/*时间选择器*/}
                    <div  className={'selectDate'}>
                        <span >选择时间：<DatePicker  format={dateFormat} onChange={this.onTimeChange}/></span>
                        <span> <TimePicker value={this.state.value} onChange={this.onTimeChange} /></span>
                        <span><Button type="primary" onClick={this.getdata}>回放</Button></span>
                    </div>
                </div>
                <ul className={'select'}>
                    <li className={this.state.activeType.indexOf(0)>=0?'active':''} type={0} onClick={this.callback}>选择全部</li>
                    <li
                        className={this.state.activeType.indexOf(1)>=0||this.state.activeType.indexOf(0)>=0?'active':''}
                        type={1} onClick={this.callback}
                    >口告警类型</li>
                    <li
                        className={this.state.activeType.indexOf(2)>=0||this.state.activeType.indexOf(0)>=0?'active':''}
                        type={2} onClick={this.callback}
                    >CPU告警类型</li>
                    <li
                        className={this.state.activeType.indexOf(3)>=0||this.state.activeType.indexOf(0)>=0?'active':''}
                        type={3} onClick={this.callback}
                    >内存告警类型</li>
                    <li
                        className={this.state.activeType.indexOf(4)>=0||this.state.activeType.indexOf(0)>=0?'active':''}
                        type={4} onClick={this.callback}
                    >事件子类型D</li>
                    <li
                        className={this.state.activeType.indexOf(5)>=0||this.state.activeType.indexOf(0)>=0?'active':''}
                        type={5} onClick={this.callback}
                    >事件子类型E</li>
                </ul>
                <p>近一个小时</p>

                {/* *******图表********* */}

                <Chart height={100} data={this.state.G2data} scale={scale} forceFit padding={[0,0,0,0]}>
                    <Tooltip crosshairs={{ type: 'rect' }} />
                    <Geom type="interval" position="date*value" color="month"/>
                </Chart>
                <Table
                    columns={columns} dataSource={this.state.showBgdata} onChange={this.onChange}
                />,
            </div>
        )
    }
}



export default ClickEventPage;

