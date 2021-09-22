import React, { useState } from "react";
import Axios from "axios";
export default function SignInPage() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus,setLoginStatus]=useState('');

  

  const login=()=>{
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
          setLoginStatus(response.data[0].username)
      }
     
    });
  };

  

  return (
    <div className="container my-3">
      <div className="card bg-secondary">
        <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
          <h4 className="card-title mt-3 text-center">Login Account</h4>
          <p>
            <a href="#1" className="btn btn-block btn-twitter bg-warning">
              {" "}
              <i className="fab fa-google"></i>   Login via Google
            </a>
            <a
              href="#1"
              className="btn btn-block btn-facebook "
              style={{ backgroundColor: "#405D9D" }}
            >
              {" "}
              <i className="fab fa-facebook-f"></i>   Login via facebook
            </a>
          </p>
          <p className="divider-text">
            <span style={{ paddingLeft: 120 }}>OR</span>
          </p>

          <form>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user"></i>{" "}
                </span>
              </div>
              <input
                name=""
                className="form-control"
                placeholder="Username"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Create password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={login}
              >
                Login Account
              </button>
            </div>
            <p className="text-center">
              Create an account? <a href="#1">Register Now</a>{" "}
            </p>
          </form>
        <h1>{loginStatus}</h1>
        </article>
      </div>
    </div>
  );
}
