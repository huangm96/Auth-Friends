import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function AppHeader(props) {
  const [gotToken, setGotToken] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setGotToken(false);
    } else {
      setGotToken(true);
    }
  }, [props.isFetching]);

  const removeToken = () => {
    localStorage.removeItem("token")
     setGotToken(false);
}

  return (
    <div className="AppHeaderContainer">
      <h1>Auth-Friends-App</h1>

      <div className="Links-Container">
        {gotToken ? (
          <Link className="Links" to="/" onClick={removeToken}>
            Log Out
          </Link>
        ) : (
          <Link className="Links" to="/data">
            Friends Page
          </Link>
        )}
        {/* <Link className="Links" to="/login">
          Login
        </Link> */}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  {}
)(AppHeader);
