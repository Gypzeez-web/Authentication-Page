import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Login from "./components/facebook_component/login";
import Header from "./components/header";
import OralLoginPage from "./components/oralLoginPage";
import {
  InitFacebookSDK,
  JWTInterceptor,
  history,
  ErrorInterceptor,
} from "./components/facebook_component/helpers";
import { Router } from "react-router";
import PrivateRoute from "./components/facebook_component/navigator/privateRoute";
import Home from "./components/facebook_component/home/Home";

//setup dummy backend
//enable interceptors for http requests
JWTInterceptor();
ErrorInterceptor();
//wait for facebook sdk before start up
InitFacebookSDK().then(App);

function App() {
  const pathname = useLocation().pathname || "";
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
        <OralLoginPage />
        <Login />
      </Router>
    </div>
  );
}

export default App;
