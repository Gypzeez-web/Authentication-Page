import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Login from "./components/facebook_component/login";
import Header from "./components/header";
import PrivateRoute from "./components/facebook_component/navigator/privateRoute";
import Home from "./components/facebook_component/home/Home";


function App() {
  const pathname = useLocation().pathname || "";
  return (
    <div className="App">
      <Header />
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
    </div>
  );
}

export default App;
