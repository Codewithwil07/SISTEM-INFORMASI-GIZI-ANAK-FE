import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './global.css';
import store from './redux/app/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
