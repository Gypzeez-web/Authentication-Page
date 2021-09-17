import React from 'react';
import {render} from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';

import { initFacebookSdk, jwtInterceptor, errorInterceptor, history,fakeBackEnd } from  './components/facebook_component/helpers';

fakeBackEnd();
jwtInterceptor();
errorInterceptor();

initFacebookSdk().then(startApp);
function startApp() { 
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('root')
    );
}
