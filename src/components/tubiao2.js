import React, { Component } from 'react';
// import createG2 from 'g2-react';
import G2 from '@antv/g2'

class Tubiao2 extends Component{
    componentDidMount(){
        var chart = new G2.Chart({
            container: 'mountNode',
            forceFit: true,
            height: 200,
            padding:[ 0,0,0,0]
        });
        chart.source(this.props.data);
        chart.scale('sales', {
            tickInterval: 10
        });
        chart.interval().position('genre*sold').color('#0a0');
        chart.render();
    }
    render(){
        return(
            <div id="mountNode"></div>
        )
    }
}
export default Tubiao2
