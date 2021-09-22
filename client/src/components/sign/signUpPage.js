import React, { useState } from "react";
import Axios from "axios";
export default function SignUpPage() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  //  const [codeReg,setCodeReg]=useState('');
  const [numberReg, setNumberReg] = useState('');

  

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      email: emailReg,
      number: numberReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };



  

  return (
    <div className="container my-3">
      <div className="card bg-secondary">
        <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <p>
            <a href="#1" className="btn btn-block btn-twitter bg-warning">
              {" "}
              <i className="fab fa-google"></i>   Signup via Google
            </a>
            <a
              href="#1"
              className="btn btn-block btn-facebook "
              style={{ backgroundColor: "#405D9D" }}
            >
              {" "}
              <i className="fab fa-facebook-f"></i>   Signup via facebook
            </a>
          </p>
          <p className="divider-text">
            <span style={{ paddingLeft: 150 }}>OR</span>
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
                placeholder="Full name"
                type="text"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-envelope"></i>{" "}
                </span>
              </div>
              <input
                name=""
                className="form-control"
                placeholder="Email address"
                type="email"
                onChange={(e) => {
                  setEmailReg(e.target.value);
                }}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-phone"></i>{" "}
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: 120 }}>
                <option selected="">+94</option>
              </select>
              <input
                name=""
                className="form-control"
                placeholder="Phone number"
                type="text"
                onChange={(e) => {
                  setNumberReg(e.target.value);
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
                  setPasswordReg(e.target.value);
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
                placeholder="Repeat password"
                type="password"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={register}
              >
                Create Account
              </button>
            </div>
            <p className="text-center">
              Have an account? <a href="#1">Log In</a>{" "}
            </p>
          </form>     
        </article>
      </div>
    </div>
  );
}
