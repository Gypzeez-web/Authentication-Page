import axios from "axios";

import { accountService } from "../services/accountServices";

function jwtInterceptor() {
  axios.interceptors.request.use((request) => {
    //add auth header with jwt if account is logged in and request is to the api url
    const account=accountService.accountValue;
    const isLoggedIn=account?.token;
    const isAPIUrl=request.url.startsWith(process.env.AUTH_APP_URL);

    if(isLoggedIn && isAPIUrl){
        request.headers.common.Authorization = `Provider ${account.token}`;
    }
    return request;
  });
}
export default jwtInterceptor;