import React from "react";
import Head from "next/head";
import { Logo } from "./Logo";
export const Header = () => {
  return (
    <div className="header-container">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <ul className="header-list">
        <li>
          <Logo />
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
      <i className="bi bi-person" style={{ color: "white" }}></i>
    </div>
  );
};
