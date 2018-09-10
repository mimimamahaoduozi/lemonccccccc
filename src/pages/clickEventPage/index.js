import React, { Component } from 'react';
import {Tabs,Icon} from 'antd'
import Tubiao1 from '../../components/tubiao'

import ajax from '../../api/fetch'
import './index.css'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
class ClickEventPage extends Component{
    constructor(props){
        super(props);
        this.state={
            G2data:[],
            Bgdata:[]
        }
    }
    componentDidMount(){
        let getG2Data=ajax('/array');
        let getBgData=ajax('/bgdata');
        Promise.all([getG2Data,getBgData])
            .then(res=>{
                this.setState({
                    G2data:res[0].data,
                    Bgdata:res[1].bgdata,
                    typeColor:[
                        '#a00',
                        '#0a0',
                        '#b70',
                    ]
                });
                console.log(this.state);
            });
        console.log(this.state.data);
    }
    render(){
        console.log(this.data);
        return(
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Tab 1" key="1"/>
                    <TabPane tab="Tab 2" key="2"/>
                    <TabPane tab="Tab 3" key="3"/>
                </Tabs>
                <p>近一个小时</p>

                {this.state.G2data?<Tubiao1 data={this.state.G2data}/>: <div>加载中。。。</div> }
                <ul className={'menu'}>
                    <li style={{flex:1}}>告警对象信息<Icon type="filter" theme="outlined" style={{fontSize:'20px'}}/></li>
                    <li style={{flex:1}}>应用名</li>
                    <li style={{flex:1}}>告警类型</li>
                    <li style={{flex:1}}>告警子类型</li>
                    <li style={{flex:1}}>告警详情</li>
                    <li style={{flex:1}}>告警开始时间</li>
                    <li style={{flex:1}}>告警处理时间</li>
                    <li style={{flex:1}}>告警状态</li>
                    <li style={{flex:1}}>告警处理人</li>
                    <li style={{flex:1}}>相关变更</li>
                    <li style={{flex:1}}>操作</li>
                </ul>

                {/*循环数据渲染界面*/}
                {
                    this.state.Bgdata.map((data,index) =>{
                        return(
                            <ul key={index} className={'bgData'}>
                                <li style={{flex:1,borderLeftColor:this.state.typeColor[0]}}>{data.dataInfo}</li>
                                <li style={{flex:1}}>{data.name}</li>
                                <li style={{flex:1}}>{data.type}</li>
                                <li style={{flex:1}}>{data.childType}</li>
                                <li style={{flex:1}}>{data.xiangqing}</li>
                                <li style={{flex:1}}>{data.datestart}</li>
                                <li style={{flex:1}}>{data.dealdate}</li>
                                <li style={{flex:1}}>{data.state}</li>
                                <li style={{flex:1}}>{data.dealpeople}</li>
                                <li style={{flex:1}}>{data.biangeng}</li>
                                <li style={{flex:1}}>{data.name}</li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}
export default ClickEventPage;

