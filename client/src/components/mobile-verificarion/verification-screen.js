import React from "react";

import { Paper, TextField, Button, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Otp from "./otp";
import axios from "axios";

function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

export default class Verification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      pno: "",
      otpShow: false,
      otp: "",
    };
  }

  _getCode = async () => {
    const e = this.state.code + this.state.pno;
    await axios
      .get("http://localhost:8000/verify/getcode", {
        params: {
          phonenumber: e.replace,
          channel: "sms",
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  _verifyCode = async () => {
    const e = this.state.code + this.state.pno;
    await axios
      .get("http://localhost:8000/verify/verifycode", {
        params: {
          phonenumber: e,
          code: this.state.otp,
        },
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(160, 160, 160, 0.2)",
          height: "100vh",
        }}
      >
        <Paper
          elevation={4}
          style={{
            padding: 20,
            width: "300",
            marginBottom: 60,
          }}
        >
          {!this.state.otpShow ? (
            <h3
              style={{
                marginLeft: 10,
                color: "#9f9f9f",
              }}
            >
              alpha
            </h3>
          ) : (
            <IconButton
              onClick={() => {
                this.setState({ otpShow: false, otp: "" });
              }}
              size="small"
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          {!this.state.otpShow ? (
            <h3>Enter Your Phone Number</h3>
          ) : (
            <h3>Enter The Otp</h3>
          )}
          {!this.state.otpShow ? (
            <p>
              A One Time Password has been sent to your phone number for
              verification puposes
            </p>
          ) : null}
          <div>
            {!this.state.otpShow ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "auto",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "center",
                    display: "flex",
                    marginRight: 10,
                    width: 60,
                  }}
                >
                  <TextField
                    id="code"
                    label="code"
                    color="secondary"
                    value={this.state.code}
                    onChange={(e) => {
                      this.setState({ code: e.target.value });
                    }}
                  />
                </div>
                <TextField
                  id="phone"
                  label="phone"
                  color="secondary"
                  value={this.state.pno}
                  onChange={(e) => {
                    if (
                      (e.target.value[e.target.value.length - 1] >= "0" &&
                        e.target.value[e.target.value.length - 1] <= "9") ||
                      !e.target.value
                    ) {
                      this.setState({ pno: e.target.value });
                    }
                  }}
                />
              </div>
            ) : (
              <Otp
                otp={this.state.otp}
                setOpt={(val) => this.setState({ otp: val })}
              />
            )}
            {this.state.otpShow ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                Didn't Receive an OTP ?
                <Button
                  onClick={() => null}
                  color="primary"
                  style={{
                    textTransform: "none",
                    fontSize: 15,
                  }}
                >
                  Resend OTP
                </Button>
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20",
              }}
            >
              <Button
                variant="contained"
                disabled={
                  this.state.pno.length !== 10 ||
                  this.state.code === null ||
                  !isNumeric(this.state.pno) ||
                  (this.state.otpShow && this.state.otp.length !== 6)
                }
                color="secondary"
                style={{
                  color: "white",
                  marginLeft: "auto",
                  textTransform: "none",
                }}
                onClick={() => {
                  if (this.state.otpShow) {
                  } else {
                    this.setState({ otpShow: true });
                  }
                }}
              >
                Verify
              </Button>
            </div>
            {!this.state.otpShow ? (
              <p>
                By tapping Verify an SMS may be sent. Message and data rates may
                apply
              </p>
            ) : null}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 10,
              }}
            >
              <a
                href="#1"
                style={{
                  textDecoration: "none",
                  fontSize: "14",
                }}
              >
                Terms Of Service
              </a>
              <a
                href="#2"
                style={{
                  textDecoration: "none",
                  fontSize: "14",
                  marginLeft: 10,
                }}
              >
                User agreement
              </a>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
