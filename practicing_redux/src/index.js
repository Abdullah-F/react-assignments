import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import counter from './store/reducers/counter';
import results from './store/reducers/results';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    counterReducer: counter,
    resultsReducer: results,
})
const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
