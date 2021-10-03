import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import AppContainer from './AppContainer';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

store.runSaga();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
