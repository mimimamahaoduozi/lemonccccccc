import React, { Component } from 'react';
import { BrowserRouter as Router ,Link,Route} from 'react-router-dom'
class Click extends Component{
    render(){
        return(
                <div>
                    <ul>
                        <li><Link to={'/click/click1'}>click1</Link></li>
                        <li><Link to={'/click/click2'}>click2</Link></li>
                    </ul>
                    <Route exact path={'/click'} component={Click1}/>
                    <Route path={'/click/click1'} component={Click1}/>
                    <Route path={'/click/click2'} component={Click2}/>
                </div>
        )
    }
}

class Click1 extends Component{
    render(){
        return(
           <div>
               click1
           </div>
        )
    }
}
class Click2 extends Component{
    render(){
        return(
            <div>
                click2
            </div>
        )
    }
}
export default Click
