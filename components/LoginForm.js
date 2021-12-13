import React, { useState } from "react";
import { Input } from "./Input";
import { register } from "../services/user";
export const LoginForm = ({ setFlag }) => {
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const handleRegister = () => {
    register(registerData).then((res) => {
      if (res) {
        setFlag(false);
      } else console.log("Email already in use ! ");
    });
  };

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
          onChange={(e) =>
            setRegisterData({ ...registerData, fullname: e.target.value })
          }
        />
      </div>
      <input
        className="loginform-input-full"
        type="text"
        placeholder="Email*"
        onChange={(e) =>
          setRegisterData({ ...registerData, email: e.target.value })
        }
      />
      <input
        className="loginform-input-full"
        type="password"
        placeholder="Password*"
        onChange={(e) =>
          setRegisterData({ ...registerData, password: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Repeat Password*"
        className="loginform-input-full"
      />

      <button className="login-btn" onClick={handleRegister}>
        Submit
      </button>
    </>
  );
};
