import React from "react";
import { Logo } from "../components/Logo";
const home = () => {
  return (
    <div className="home-container">
      <div className="home-logo">
        <Logo className="home-logo-item" />
      </div>
      <h2 className="home-title">The Logo Above is Made in Pure CSS</h2>
    </div>
  );
};
export default home;
