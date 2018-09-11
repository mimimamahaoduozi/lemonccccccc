import React, { Component } from 'react';
import {Icon} from 'antd'
import Tubiao1 from '../../components/tubiao'
import Tubiao2 from '../../components/tubiao2'

// import ajax from '../../api/fetch'
import './index.css'

// require('../../mock');

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
    {dataInfo:'10.5.22.0',name:'itrade',type:'click',childType:'duankou',xiangqing:'端口：8050',datestart:'2018-1-1 22:22:22',dealdate:'2018-2-1 22:22:22',state:0,dealpeople:'李四',biangeng:5,activeType:1},
    {dataInfo:'10.5.22.0',name:'itrade',type:'click',childType:'duankou',xiangqing:'端口：8050',datestart:'2018-1-1 22:22:22',dealdate:'2018-2-1 22:22:22',state:0,dealpeople:'李四',biangeng:5,activeType:2},
    {dataInfo:'10.5.22.0',name:'itrade',type:'click',childType:'duankou',xiangqing:'端口：8050',datestart:'2018-1-1 22:22:22',dealdate:'2018-2-1 22:22:22',state:0,dealpeople:'李四',biangeng:5,activeType:3},
    {dataInfo:'10.5.22.0',name:'itrade',type:'click',childType:'duankou',xiangqing:'端口：8050',datestart:'2018-1-1 22:22:22',dealdate:'2018-2-1 22:22:22',state:0,dealpeople:'李四',biangeng:5,activeType:4},
    {dataInfo:'10.5.22.0',name:'itrade',type:'click',childType:'duankou',xiangqing:'端口：8050',datestart:'2018-1-1 22:22:22',dealdate:'2018-2-1 22:22:22',state:0,dealpeople:'李四',biangeng:5,activeType:5}
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
        }else {
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
                    >端口告警类型</li>
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

                {/*这里改一下*/}
                {/*{this.state.G2data?<Tubiao1 data={G2data}/>: <div>加载中。。。</div> }*/}
                <Tubiao2 data={G2data}/>
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

                {/*循环数据渲染界面(这里也改了)*/}
                {
                    Bgdata.map((data,index) =>{
                        return(
                            this.state.activeType.indexOf(data.activeType)>=0||this.state.activeType.indexOf(0)>=0?
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
                            </ul>:null
                        )
                    })
                }
            </div>
        )
    }
}



export default ClickEventPage;

