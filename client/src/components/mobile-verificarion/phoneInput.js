import React from "react";
import axios from "axios";
function PhoneInput(props) {
  const { value, handleChange, hashHandleChange } = props;

  const Continue = (e) => {
    axios
      .post("http://localhost:8855/sendOTP", {
        phone: `${value.phone}`,
      })
      .then(function (res) {
        console.log(res.data.otp);
        const hash = res.data.hash;
        hashHandleChange(hash);
      });

    e.preventDefault();
    props.nextStep();
  };
  return (
    <div className="container">
      <div>
        <div>
          <div>Authentication App</div>

          <div>Phone number:</div>
          <div>
            <input
              type="tel"
              value={value.phone}
              onChange={handleChange("phone")}
              placeholder="+94077123456"
            />
          </div>
          <button onClick={Continue}>Send OTP</button>
        </div>
      </div>
    </div>
  );
}

export default PhoneInput;
