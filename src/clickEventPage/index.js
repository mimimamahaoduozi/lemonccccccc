import React, { Component } from 'react';
import { Table,Menu, Icon, DatePicker ,Button,TimePicker,Modal,Input,Select} from 'antd'
import { Chart, Tooltip, Geom } from 'bizcharts'
import moment from 'moment'
import 'antd/dist/antd.min.css'
import './index.css'
import ajax from '../api/fetch'
//使用Mock
require('../mock');

const dateFormat = 'YYYY/MM/DD';
const Option = Select.Option;
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

export default class ClickEventPage extends Component{

    constructor(props){
        super(props);
        this.state={

            // 数据的(以后通过ajax获取的数据放在这里)
            G2data:{},
            Bgdata:[],
            activeType:[0],
            showBgdata:[],
            typeColor:['#a00', '#0a0', '#b70'],

            //下面是导航的
            visible: false,

    //ajax请求参数
            //当前时间
            time:new Date().getTime(),
            //当前事件类型
            eventType:'',
        };
    }
    //定义表格形态
    columns = [
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
            render :(a) => {
                return(<a onClick={this.case}>相关变更</a>)
            }
        },
        {
            title: '操作',
            dataIndex: 'address1',
        }

    ];
    //表格change
    onChange=(pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    };
    //选择子类型（筛选表单信息）
    callback=(e) =>{
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
            if (this.state.activeType.indexOf(0)>=0) {
                this.setState({
                    showBgdata:this.state.Bgdata.filter(() => {
                        return this.state.activeType.indexOf(type)>=0
                    }),
                    activeType:[type]
                })
            }
            else {
                if (this.state.activeType.indexOf(type) >= 0) {
                    this.state.activeType.pop(type);
                } else {
                    this.state.activeType = Array.from(new Set([...this.state.activeType, type]));
                }
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
        console.log(e);
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
        this.setState({
            time:setTime,
            value: time
        });
    };
    //改变当前事件类型
    changeEventType = (e) =>{

        this.setState({
            eventType:e.key.toString()
        })
    };
    //调后台接口
    getdata = (time)=>{
        //ajax请求
        //请求bgdata
        ajax('/bgdata')
            .then(res => {
            this.setState({
                Bgdata:res.data,
                showBgdata:res.data
            })
        });
        //请求g2data
        ajax('http://localhost:3000/array',{
            eventType:this.state.eventType || 'EVENT_TYPE',
            from:time-3600000,
            to:time,
            subType:'先写死',
        })
            .then(res => {
            //改变请求到的数据的格式
            let data=res.data;
            let newG2Data=this.handleData(data)
            this.setState({
                G2data:newG2Data
            })
        });
    };
    //G2筛选数据（每分钟一个）
    handleData =(data)=>{
        let date = 1231243423401;
        let newData=[];
        for (let i=0; i<60; i++){
            newData.push({
                date : date,
                value: data[date] || 0
            });
            date+=60000;
        }
        return newData;
    };
    //时间戳转时间
    getdate =(timestamp) => {
        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        return Y+M+D;
    };
    gettime = (timestamp) => {
        let date = new Date(timestamp);
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return h+m+s
    };
    //选择框发生改变
    handleChange=(value) => {
        if (value == 'hf') {
            this.getdata(this.state.time);
            clearInterval(this.i)
        }else {
            this.getdata(new Date().toTimeString());
            clearInterval(this.i);
            this.i=setInterval(()=>{this.getdata(new Date().toTimeString())},10000)
        }
    };
    //相关变更模态框
    case = ()=>{
        console.log(111111111)
    };
    //钩子函数
    componentDidMount(){
        this.getdata(new Date().toTimeString());
        this.i=setInterval(()=>{this.getdata(new Date().toTimeString())},10000)
    }
    componentWillUnmount(){
        clearInterval(this.i)
    }
    render(){
        //默认时间
        let date = this.getdate(this.state.time);
        let time = this.gettime(this.state.time);
        const cols = {
            date: {
                tickInterval:60
            }
        };
        console.log(this.state);
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
                        <span >选择时间：<DatePicker  format={dateFormat} defaultValue={moment(date, dateFormat)} onChange={this.onTimeChange}/></span>
                        <span> <TimePicker defaultValue={moment(time, 'HH:mm:ss')}   onChange={this.onTimeChange} /></span>
                        {/*<span><Button type="primary" onClick={this.getdata}>回放</Button></span>*/}
                        <Select defaultValue="实时" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="hf">回放</Option>
                            <Option value="now">实时</Option>
                        </Select>
                        {/*下拉菜单*/}

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
                <Chart height={100} data={this.state.G2data} scale={cols} forceFit padding={[0,0,0,0]}>
                    <Tooltip />
                    <Geom type="interval" position="date*value" color="#070" onClick={this.case}/>
                </Chart>

                <Table
                    columns={this.columns} dataSource={this.state.showBgdata} onChange={this.onChange}
                />,
            </div>
        )
    }
}

