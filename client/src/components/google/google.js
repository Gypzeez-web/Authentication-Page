import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";


const clientid =
"863428420739-3291pi60td9hkii3dq6qdc2klc97lesc.apps.googleusercontent.com";
export default function GoogleAuthentication() {
 

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onFailureSuccess = (res) => {
    console.log("Login Failed", res);
  };

  const onSignoutSuccess = () => {
    alert("You Have Been Signed Out successfully");
    console.clear();
    setShowloginButton(true);
    setShowloginButton(false);
  };
  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientid}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}
      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientid}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
