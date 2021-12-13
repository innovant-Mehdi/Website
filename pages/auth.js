import React, { useState } from "react";
import { Input } from "../components/Input";
import { LoginForm } from "../components/LoginForm";
import { LoginRegister } from "../components/LoginRegister";

const auth = () => {
  const [flag, setFlag] = useState(false);
  const handleLogin = () => {};
  return (
    <div>
      <div className="login-container">
        <LoginRegister setFlag={setFlag} />
        {!flag && (
          <>
            <Input type={"text"} placeholder={"Email*"} />
            <Input type={"text"} placeholder={"Password*"} />
            <button className="login-btn">Submit</button>
          </>
        )}
        {flag && <LoginForm setFlag={setFlag} />}
      </div>
    </div>
  );
};
export default auth;
