import React,{useEffect} from "react";
import {accountService} from 'services';

function Login({history}){
    useEffect(()=>{
        if(accountService.accountValue){
            history.push('/');
        }
    })
    return(
        <div className="col-md-6 offset-md-3 mt-5 text-center">
            <div className="card">
                <h4 className="card-header">Facebook Login</h4>
                <div className="card-body">
                    <button className="btn btn-facebook" onClick={accountService.login}>
                        <i className="fa fa-facebook mr-1"></i>
                        Login with Facebook
                    </button>
                </div>
            </div>
        </div>

    );

}

export default Login;