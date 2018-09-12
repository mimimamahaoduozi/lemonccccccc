import React, { Component } from 'react';
import { Table} from 'antd'
import Tubiao2 from '../../components/tubiao2'

// import ajax from '../../api/fetch'
import './index.css'


//改变时间样式
Date.prototype.toLocaleString = function() {
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
};

//定义表格形态
const columns = [
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
        dataIndex: 'eventStatus',
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
        dataIndex: 'address',
    }

];

//图表的数据
const G2data=[
    { genre: 'Sports', sold: 275 ,},
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter2', sold: 350 },
    { genre: 'Other', sold: 150 },
    { genre: 'Sports1', sold: 275 },
    { genre: 'Strategy1', sold: 115 },
    { genre: 'Action1', sold: 120 },
    { genre: 'Shooter1', sold: 350 },
    { genre: 'Other1', sold: 150 },
    { genre: 'Sports2', sold: 275 },
    { genre: 'Strategy2', sold: 115 },
    { genre: 'Action2', sold: 120 },
    { genre: 'Shooter0', sold: 350 },
    { genre: 'Other2', sold: 150 },
    { genre: 'Sports3', sold: 275 },
    { genre: 'Strategy3', sold: 115 },
    { genre: 'Action3', sold: 120 },
    { genre: 'Shooter3', sold: 350 },
    { genre: 'Other3', sold: 150 },
    { genre: 'Sports4', sold: 275 },
    { genre: 'Strategy4', sold: 115 },
    { genre: 'Action4', sold: 120 },
    { genre: 'Shooter4', sold: 350 },
    { genre: 'Other4', sold: 150 },
    { genre: 'Sports5', sold: 275 },
    { genre: 'Strategy6', sold: 115 },
    { genre: 'Action6', sold: 120 },
    { genre: 'Shooter6', sold: 350 },
    { genre: 'Other6', sold: 150 },
];
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
            // G2data:[],
            // Bgdata:[],
            activeType:[],
            typeColor:['#a00', '#0a0', '#b70'],
        }
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
    onChange=(pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    };

    //选择类型
    callback=(e) =>{
        console.log(e.target.type);
        let type=parseInt(e.target.type)
        if (type === 0) {

            if (this.state.activeType.indexOf(type)>=0) {
                this.setState({
                    activeType:[]
                })
            }else{
                this.setState({
                    activeType:[0]
                })
            }
        } else {
            if (this.state.activeType.indexOf(type)>=0) {
                this.state.activeType.pop(type)
                this.setState({
                    activeType:this.state.activeType
                })
            }else{
                this.setState({
                    activeType:Array.from(new Set([...this.state.activeType,type]))
                })
            }
        }
    };
    render(){
        return(
            <div>
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
                <Tubiao2 data={G2data}/>
                <Table columns={columns} dataSource={Bgdata} onChange={this.onChange} />,
            </div>
        )
    }
}



export default ClickEventPage;

