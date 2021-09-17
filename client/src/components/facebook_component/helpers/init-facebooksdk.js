import { accountService } from "../services/accountServices";

const facebookAppId = process.env.AUTH_APP_FACEBOOK_APP_ID;

function initFacebookSdk() {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : facebookAppId,
        cookie     : true,                     // Enable cookies to allow the server to access the session.
        xfbml      : true,                     // Parse social plugins on this webpage.
        version    : 'v12.0'           // Use this Graph API version for this call.
      });
  
  
      
      // auto authenticate with the api if already logged in with facebook
      window.FB.getLoginStatus(({ authResponse }) => {
        if (authResponse) {
          accountService
            .apiAuthenticate(authResponse.accessToken)
            .then(resolve);
        }
        else{
            resolve();
        }
      });
    };
    // load facebook sdk script
    (function(d,s,id){
        var js,fjs=d.getElementByTagNAme(s)[0];
        if(d.getElementById(id)){
            return;
        }
        js=d.createElement(s);
        js.id=id;
        js.src='https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js,fjs);
    }(document,'script','facebook-jssdk'));
  });
  
}
export default initFacebookSdk;
