import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/containers/App';
import registerServiceWorker from 'src/registerServiceWorker';
import store from 'src/store';
import './index.css';

/**
 * Wrapper for the React.DOM render execution. In order to be able to subscribe
 * to the Redux store.
 */
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );
}

render();
store.subscribe(render);

registerServiceWorker();
