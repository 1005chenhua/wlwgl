import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/router';
import appStore from '@/redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Warning from '@/components/warning';
import '@/styles/index.scss';
import '@/mock/index';

const store = createStore(appStore, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store ={store}>
    <App />
    <Warning />
  </Provider>,
  document.getElementById('root')
);
