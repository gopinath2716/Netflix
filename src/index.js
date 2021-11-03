import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { store } from './Store/store';
import { Provider } from 'react-redux';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <App devName="NguyenNamDuong" /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);