import React, { Component } from 'react';
import { Chart, Tooltip, Axis, Bar } from 'viser-react';
const scale = [{
    dataKey: 'sales',
    tickInterval: 1,
    nice: false,
    min: 0,
},{
    dataKey: 'count',
    max: 14,
}];
class Tubiao1 extends Component{
    componentWillReceiveProps(){
        console.log('aaaaaaaaaa')
    }
    render(){
        return (
            <div>
                <Chart forceFit height={100}  data={this.props.data} scale={scale} padding={[ 0, 0, 0, 0]}>
                    <Tooltip />
                    <Bar position="genre*sold" color={'#0fa'} binWidth={0}/>
                </Chart>
            </div>
        )
    }
}
export default Tubiao1
