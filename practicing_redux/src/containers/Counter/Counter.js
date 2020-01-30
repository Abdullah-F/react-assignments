import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={() => this.props.onAddToCounter(10)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractFromCounter(5)} />
                <hr />
                <ul>
                    <button onClick={this.props.onStoreResult}>save</button>
                    {
                        this.props.results.map((result) => {
                            return <li onClick ={()=> this.props.onDeleteResult(result.id)} key={result.id} id={result.id}>{result.value}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        results: state.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INC_COUNTER' }),
        onDecrementCounter: () => dispatch({ type: 'DEC_COUNTER' }),
        onAddToCounter: (value) => dispatch({ type: 'ADD_TO_COUNTER', value: value }),
        onSubtractFromCounter: (value) => dispatch({ type: 'SUBTRACT_FROM_COUNTER', value: value }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: (resultId) => dispatch({ type: 'DELETE_RESULT', resultId: resultId}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);