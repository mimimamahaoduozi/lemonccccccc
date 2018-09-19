import React, {Component} from 'react';
import createG2 from 'g2-react';
import G2,{Stat,Frame } from 'g2';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 1100,
            height: 150,
            plotCfg: {
                margin: [20, 10, 60, 10]
            },
        };
    }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data ;
    }

    render() {
        let clickFunc = this.props.click;
        const Chart = createG2(chart => {
            const Stat = G2.Stat;
            chart.col('time', {
                //为时间和真实变更数目的组合字符串 toolTip中显示变更数目
                alias: '变更数'
            });
            chart.legend(false);
            chart.tooltip(true, {
                title: null // 默认标题不显示
            });
            chart.axis('time', {
                title: null, // 不展示 xDim 对应坐标轴的标题
                formatter: function(val) {
                    return val.split(' ')[0];
                }
            });
            chart.axis('height',false);
            chart.interval().position('time*height').color('#5A80C7').tooltip('time');
            chart.render();
            chart.on('tooltipchange',function(ev){
                var item = ev.items[0]; // 获取tooltip要显示的内容
                item.value = item.value.split(' ')[1];
            });
            chart.on('plotclick',function(ev){
                var data = ev.data;
                if (data) {
                    var timestamp = data._origin['timestamp'];
                    clickFunc(timestamp)
                }
            });
        });

        return (
            <div style={{margin: '0px auto'}}>
                <Chart
                    data={this.props.data}
                    width={this.state.width}
                    height={this.state.height}
                    plotCfg={this.state.plotCfg}/>
            </div>
        );
    }
}

export default BarChart;
