import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import rootReducer from './reducers';
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = document.getElementById('root');
if (root)
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
