import React, { Component } from 'react';
import { Table,Menu, Icon, DatePicker ,Button,TimePicker,Modal,Input} from 'antd'
import { Chart, Tooltip, Geom } from 'bizcharts'
import moment from 'moment';
import 'antd/dist/antd.min.css'
// import ajax from '../../api/fetch'
import './index.css'


//图标使用的
const scale = {
    month: {alias: 'Month',},
    count: {alias: 'Sales',},
};

const dateFormat = 'YYYY/MM/DD';
//改变时间样式
Date.prototype.toLocaleString = function() {
    let year=this.getFullYear(),
        mouth=this.getMonth() + 1;
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
};

//表格前面颜色块
const typeColor=[
    '#a00',
    '#0a0',
    '#b70',
]

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

//图表的数据
const G2data={
    '1231243423401':213,
    '1231243423402':213,
    '1231243423403':231,
    '1231243423404':233,
    '1231243423405':353,
    '1231243423406':123,
    '1231243423407':123,
    '1231243423408':123,
    '1231243423409':234,
    '1231243423410':345,
    '1231243423411':123,
    '1231243423412':234,
    '1231243423413':123,
    '1231243423414':234,
    '1231243423415':123,
    '1231243423416':234,
    '1231243423417':123,
    '1231243423418':123,
};
//表格的数据
const Bgdata = [
    {alarmRate:'10.5.22.0',appName:'itrade',type:'click',subType:'duankou',eventDetail:'端口：8050',gmtCreate:1536711453431,gmtOccur:1536711437435,eventStatus:0,operator:'李四',biangeng:5,activeType:1},
    {alarmRate:'10.5.22.0',appName:'itrade',type:'click',subType:'duankou',eventDetail:'端口：8050',gmtCreate:1536711443431,gmtOccur:1536711436431,eventStatus:0,operator:'李四',biangeng:5,activeType:2},
    {alarmRate:'10.5.22.0',appName:'itrade',type:'click',subType:'duankou',eventDetail:'端口：8050',gmtCreate:1536711433431,gmtOccur:1536711435431,eventStatus:0,operator:'李四',biangeng:5,activeType:3},
    {alarmRate:'10.5.22.0',appName:'itrade',type:'click',subType:'duankou',eventDetail:'端口：8050',gmtCreate:1536711423431,gmtOccur:1536711434431,eventStatus:0,operator:'李四',biangeng:5,activeType:4},
    {alarmRate:'10.5.22.0',appName:'itrade',type:'click',subType:'duankou',eventDetail:'端口：8050',gmtCreate:1536711413431,gmtOccur:1536711433431,eventStatus:0,operator:'李四',biangeng:5,activeType:5}
];


class ClickEventPage extends Component{

    constructor(props){
        super(props);
        this.state={
            //当前事件类型
            eventType:'',

            // 数据的(以后通过ajax获取的数据放在这里)
            G2data:[],
            // Bgdata:[],
            activeType:[],
            showBgdata:[],
            typeColor:['#a00', '#0a0', '#b70'],

            //下面是导航的
            value: null,
            visible: false,

            //当前时间
            time:new Date().getTime()

        };
        window._state=this.state
    }

    //这里注释的暂时都用不到了
    // componentDidMount(){
    //     let getG2Data=ajax('/array');
    //     let getBgData=ajax('/bgdata');
    //     if (this.state.Bgdata.length>0) return null;
    //     Promise.all([getG2Data,getBgData])
    //         .then(res=>{
    //             this.setState({
    //                 G2data:res[0].data,
    //                 Bgdata:res[1].bgdata,
    //                 typeColor:[
    //                     '#a00',
    //                     '#0a0',
    //                     '#b70',
    //                 ],
    //                 activeType:0
    //             });
    //             console.log(this.state);
    //         });
    //     console.log(this.state.data);
    // }
    //


    //表格change
    // onChange=(pagination, filters, sorter) => {
    //     console.log('params', pagination, filters, sorter);
    // };

    //选择类型
    callback=(e) =>{
        // console.log(e.target.type);
        let newActiveType=[];
        let type=parseInt(e.target.type)
        if (type === 0) {
            if (this.state.activeType.indexOf(type)>=0) {
                this.setState({
                    activeType:[],
                    showBgdata:[]
                })
            }else{
                this.setState({
                    activeType:[0],
                    showBgdata: Bgdata
                })
            }
        } else {
            if (this.state.activeType.indexOf(type)>=0) {
                this.state.activeType.pop(type);
            }else{
                this.state.activeType=Array.from(new Set([...this.state.activeType,type]));
            }
            this.setState({
                showBgdata:Bgdata.filter((a) => {
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
        let setTime=new Date(time._d).getTime()
        console.log(typeof setTime);
        console.log(this.state);
        this.setState({
            time:setTime
        });
    };

    //改变当前事件类型
    changeEventType = (e) =>{
        // console.log(e.key);
        this.setState({
            eventType:e.key.toString()
        })
    };
    componentDidMount(){
        //改变showBgdata
        //     switch (this.state.) {
        //         case 0:
        //             return this.state.showBgdata= Bgdata;
        //         default:
        //             return Bgdata.filter((a)=>{
        //                 return this.state.showBgdata=a.activeType == index;
        //             })
        //     }
        let newG2Data=[];
        for (let key in G2data) {
            newG2Data.push({
                date:key,
                value:G2data[key]
            })
        }
        this.setState({
            G2data:newG2Data
        })
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
                            <Menu.Item key="mail"  onClick={this.changeEventType}>
                                <h3>全部告警</h3>
                            </Menu.Item>
                            <Menu.Item key="app" onClick={this.changeEventType}>
                                <h3>单击事件</h3>
                            </Menu.Item>
                            <Menu.Item key="jiaoyi" onClick={this.changeEventType}>
                                <h3>交易事件</h3>
                            </Menu.Item>
                            <Menu.Item key="huabei" onClick={this.changeEventType}>
                                <h3>基础设施事件</h3>
                            </Menu.Item>
                            <Menu.Item key="alipay" onClick={this.changeEventType}>
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
                        <span><Button type="primary">回放</Button></span>
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

