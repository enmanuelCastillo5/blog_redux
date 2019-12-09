import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import '../src/css/iconos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(
     reducers, //all reducers
     {}, //initial state
     applyMiddleware(reduxThunk)
);


ReactDOM.render(
     <Provider store={store}>
          <App />
     </Provider>,
     document.getElementById('root')
     );
