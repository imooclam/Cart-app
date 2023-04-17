import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
// import store and provider coming from react redux
import { store } from './store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* // we import store prop equal to our store we then  setup slice */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  
);
