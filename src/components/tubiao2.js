import React, { Component } from 'react';

import { Chart, Tooltip, Geom } from 'bizcharts'
const scale = {
    month: {alias: 'Month',},
    count: {alias: 'Sales',},
};
class Tubiao2 extends Component{
    render(){
        return(
            <Chart height={400} data={this.props.data} scale={scale} forceFit position={[0,0,0,0]}>
                <Tooltip crosshairs={{ type: 'rect' }} />
                <Geom type="interval" position="date*value" color="month" />
            </Chart>
        )
    }
}
export default Tubiao2
