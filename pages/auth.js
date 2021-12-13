import React from "react";
import { Input } from "../components/Input";
import { LoginForm } from "../components/LoginForm";
import { LoginRegister } from "../components/LoginRegister";

const auth = () => {
  return (
    <div>
      <div className="login-container">
        <LoginRegister />
        <Input type={"text"} placeholder={"Email*"} />
        <Input type={"text"} placeholder={"Password*"} />
        <button className="login-btn">Submit</button>
      </div>
      <LoginForm />
    </div>
  );
};
export default auth;
