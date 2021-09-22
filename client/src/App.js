import React from "react";
//import auth from "./auth";
//import StepForm from "./components/mobile-verificarion/stepForm";
//import Home from "./components/mobile-verificarion/home";

//import { Route, Switch, Redirect, useLocation } from "react-router-dom";
//import Login from "./components/facebook_component/login";
//import GoogleAuthentication from "./components/google/google";
import Header from "./components/header";
import SignInPage from "./components/sign/signInPage";
//import Verification from "./components/mobile-verificarion/verification-screen";
//import PrivateRoute from "./components/facebook_component/navigator/privateRoute";
//import Home from "./components/facebook_component/home/Home";
//import OralLoginPage from "./components/oralLoginPage";
import SignUpPage from "./components/sign/signUpPage";

function App() {
  //const pathname = useLocation().pathname || "";
  return (
    <div className="App">
      <Header />
      <SignUpPage/>
      <SignInPage/>
    </div>
  );
  /*if (auth.isAuthenticated()) return <Home />;
  else return <StepForm />;*/
}

export default App;
