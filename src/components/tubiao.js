import React, { Component } from 'react';
import { Chart, Tooltip, Axis, Bar } from 'viser-react';



const scale = [{
    dataKey: 'sales',
    tickInterval: 20,
}];
class Tubiao1 extends Component{
    componentWillReceiveProps(){
        console.log('aaaaaaaaaa')
    }
    render(){
        return (
            <div>
                <Chart forceFit height={200}  data={this.props.data} scale={scale}>
                    <Tooltip />
                    <Bar position="genre*sold" color={'#0fa'}/>
                </Chart>
            </div>
        )
    }
}
export default Tubiao1
