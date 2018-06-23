import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
