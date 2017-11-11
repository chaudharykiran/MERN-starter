import React from 'react';
import ReactDOM from 'react-dom';
import {
    AppContainer
} from 'react-hot-loader';

import 'bootstrap';

import css from './app.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        render(App)
    });
};

registerServiceWorker();
