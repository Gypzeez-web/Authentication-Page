import React, { useState } from "react";

function OralLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length >= 7;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container-fluid">
        <h3 className="mb-4.text-center">Already Have An Account</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="email"
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mx-auto"
            id="Email1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            style={{borderRadius:20,width:500}}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            value={password}
            className="form-control mx-auto"
            onChange={(e) => setPassword(e.target.value)}
            id="Password"
            placeholder="Password"
            required="true"
            style={{borderRadius:20,width:500}}
          />
        </div>
        <div className="col-6 mx-auto">
            <div className="form-group form-check my-2">
              <input type="checkbox" name="remember" className="form-check-input" id="remember_me" />
              <label className="form-check-label" for="remember_me">Remember me</label>
              <a href="#1" className="p-5 text-danger text-right">Forgot Password</a>
            </div>
          </div>
        <button
          type="submit"
          className="btn btn-primary  "
          disabled={!validateForm()}
        >
          Submit
        </button>
        <div className="form-check ">
            <h6 className="mt-3">- Or Sign In With -</h6>
            
            <button type="button" className="btn btn-outline-primary" style={{marginRight:150}}>FaceBook</button>
            <button type="button" className="btn btn-outline-dark" style={{marginRight:150}}>Phone Number</button>
            <button type="button" className="btn btn-outline-success">Google</button>
            <h6><a href="#1" className="p-2 my-2 text-secondary text-right">Create New Account</a></h6>
        </div>
      </form>
    </div>
  );
}
export default OralLoginPage;