import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase' //here, so it it will be on the scope of the whole app
import ReduxThunk from 'redux-thunk'
import DATABASE_CONNECTION from '../config_db'

import Routes from './Routes'
import reducers from './reducers'

class App extends Component {

    componentWillMount(){
        // Initializing Firebase
        var config = DATABASE_CONNECTION;
        firebase.initializeApp(config);
    }

    render() {
        return(
            //reducers, initial state, setting middlewares to deal with asynchronous processing
            <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) } >
                <Routes />
            </Provider>
        )
    }
}

export default App
