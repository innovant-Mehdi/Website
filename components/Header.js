import React from "react";
import Head from "next/head";
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
          <a>Home</a>
        </li>
        <li>
          <a>About us</a>
        </li>
        <li>
          <a>Contact us</a>
        </li>
      </ul>
      <i className="bi bi-person" style={{ color: "white" }}></i>
    </div>
  );
};
