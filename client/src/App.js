//import { Route, Switch, Redirect, useLocation } from "react-router-dom";
//import Login from "./components/facebook_component/login";

import GoogleAuthentication from "./components/google/google";
import Header from "./components/header";
//import PrivateRoute from "./components/facebook_component/navigator/privateRoute";
//import Home from "./components/facebook_component/home/Home";
import OralLoginPage from "./components/oralLoginPage";


function App() {
  //const pathname = useLocation().pathname || "";
  return (
    <div className="App">
      <Header />
      <OralLoginPage/>
      <GoogleAuthentication/>
    </div>
  );
}

export default App;
