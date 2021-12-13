import React from "react";
import { Input } from "./Input";
export const LoginForm = () => {
  return (
    <>
      <div className="loginform-name">
        <input
          type={"text"}
          placeholder={"First Name*"}
          className="loginform-input"
        />
        <input
          type={"text"}
          placeholder={"Last Name*"}
          className="loginform-input-name"
        />
      </div>
      <Input type={"text"} placeholder={"Email*"} />
      <Input type={"text"} placeholder={"Password*"} />
      <Input type={"text"} placeholder={"Repeat Password*"} />

      <button className="login-btn">Submit</button>
    </>
  );
};
