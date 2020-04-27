import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import store from './reducers';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const VeryFinalApp = () => {
    return (
        <Provider store={createStore(store)}>
            <App/>
        </Provider>
    )
}

ReactDOM.render(<VeryFinalApp />, document.getElementById('root'))