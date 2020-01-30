import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
        }
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFromCounter}  />
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onIncrementCounter: ()=>dispatch({type: 'INC_COUNTER'}),
        onDecrementCounter: ()=>dispatch({type: 'DEC_COUNTER'}),
        onAddToCounter: ()=>dispatch({type: 'ADD_TO_COUNTER'}),
        onSubtractFromCounter: ()=>dispatch({type: 'SUBTRACT_FROM_COUNTER'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);