import React from "react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <div className="AppHeaderContainer">
      <h1>Auth-Friends-App</h1>
      <div className="Links-Container">
        <Link className="Links" to="/login">
          Login
        </Link>
        <Link className="Links" to="/data">
          Friends Page
        </Link>
      </div>
    </div>
  );
}

export default AppHeader;
