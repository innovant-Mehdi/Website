import React from "react";
import { Input } from "./Input";
export const LoginForm = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Input type={"text"} placeholder={"First Name*"} />
        <Input type={"text"} placeholder={"Last Name*"} />
      </div>
      <Input type={"text"} placeholder={"Email*"} />
      <Input type={"text"} placeholder={"Password*"} />
      <Input type={"text"} placeholder={"Repeat Password*"} />
    </>
  );
};
