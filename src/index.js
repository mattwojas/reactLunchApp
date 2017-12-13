import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import App from './containers/App';

import './styles/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import { loadLunches } from './actions/lunchActions';

const store = configureStore();

store.dispatch(loadLunches());

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
