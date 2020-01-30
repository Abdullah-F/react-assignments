import React, { Component } from 'react';
import * as actionTypes from '../../store/actions'
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
                    <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>save</button>
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
        ctr: state.counterReducer.counter,
        results: state.resultsReducer.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type:actionTypes.INC_COUNTER }),
        onDecrementCounter: () => dispatch({ type:actionTypes.DEC_COUNTER }),
        onAddToCounter: (value) => dispatch({ type:actionTypes.ADD_TO_COUNTER, value: value }),
        onSubtractFromCounter: (value) => dispatch({ type:actionTypes.SUBTRACT_FROM_COUNTER, value: value }),
        onStoreResult: (counter) => dispatch({ type:actionTypes.STORE_RESULT, counter: counter }),
        onDeleteResult: (resultId) => dispatch({ type:actionTypes.DELETE_RESULT, resultId: resultId}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);