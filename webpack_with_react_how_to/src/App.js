import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Users from './containers/Users';
import LazyLoadComponent from './hoc/asyncComponent'

const LazyPizza = LazyLoadComponent(()=>{
    return import('./containers/Pizza');
})
class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <Link to="/">USERS</Link>
                    <Link to="/pizza">PIZZA</Link>
                </div>
                <div>
                    <Route path="/" component={Users}/>
                    <Route path="/pizza" component={LazyPizza}/>
                </div>
            </div>
        );
    }
}

export default App;