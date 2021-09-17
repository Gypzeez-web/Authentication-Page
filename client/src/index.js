import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
/*
//import { initFacebookSdk, jwtInterceptor, errorInterceptor, history,fakeBackEnd } from  './components/facebook_component/helpers';

//fakeBackEnd();
//jwtInterceptor();
//errorInterceptor();

//initFacebookSdk().then(startApp);
function startApp() { 
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('root')
    );
}


<Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch> */