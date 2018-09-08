import React, { Component } from 'react';

import {connect} from 'react-redux'
import * as action from '../../store/actions/G2'
import Tubiao1 from '../tubiao'

class Tubiao extends Component{

    constructor(props) {
        super(props);
        this.state={

        }
    }

    async componentDidMount(){
        await this.setState({
            data:this.props.data
        })

        // chart.setState('year', 2012);
    }
    componentDidUpdate(){
        console.log(1);
    }
    addData=()=>{
        let val={
            genre:this.refs.name.value,
            sold:parseInt(this.refs.num.value)
        };
        this.props.addFormData(val);
        this.setState({
            data:this.props.data
        })
    };
    render(){
        console.log(this.props);
        return(
            <div>
                <Tubiao1/>
                <div>
                    名字：<input type="text" ref={'name'}/>
                    数据：<input type="number" ref={'num'}/>
                    <input type="button" value={'添加'} onClick={this.addData}/>
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({...state.g2}),
    action
)(Tubiao)
