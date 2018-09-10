import React, { Component } from 'react';
import { Chart, Tooltip, Axis, Bar } from 'viser-react';
const scale = [{
    dataKey: 'sales',
    tickInterval: 1,
    nice: true,
    min: 0,
},{
    dataKey: 'genre',
}];
class Tubiao1 extends Component{
    componentWillReceiveProps(){
        console.log('aaaaaaaaaa')
    }
    render(){
        return (
            <div>
                <Chart forceFit height={100}  data={this.props.data} scale={scale} padding={[ 0, 0, 0, 0]}>
                    <Tooltip inPlot={false}/>
                    <Bar position="genre*sold" color={'#0a0'} />
                </Chart>
            </div>
        )
    }
}
export default Tubiao1
