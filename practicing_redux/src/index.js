import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import counter from './store/reducers/counter';
import results from './store/reducers/results';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counterReducer: counter,
    resultsReducer: results,
})

const logger = store =>{
    return next =>{
        return action =>{
            console.log('[Midlleware]  dispatch',action);
            const result = next(action);
            console.log('[Mddlleware] next state', store.getState());
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
