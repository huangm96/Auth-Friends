import React, { useState } from "react";
import { connect } from "react-redux";
import { saveFriends } from "../store/actions";

const AddFriendFrom = props => {
  const [checkForm, setCheckForm] = useState(false);
  const [friendForm, setFriendForm] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setFriendForm({ ...friendForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!friendForm.name || !friendForm.age || !friendForm.email) {
      setCheckForm(true);
    } else {
      props.saveFriends(friendForm);
      setFriendForm({ name: "", age: "", email: "" });
      setCheckForm(false);
    }
  };

  return (
    <div className="FriendFormContainer">
      {checkForm ? (
        <div className="errorMessage-friendForm">
          ERROR! Please Check Your Form!!!
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="info-input">
          <label>Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={friendForm.name}
          />
        </div>
        <div className="info-input">
          <label>Age</label>
          <input
            onChange={handleChange}
            type="number"
            name="age"
            value={friendForm.age}
          />
        </div>
        <div className="info-input">
          <label>Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={friendForm.email}
          />
        </div>
        <button className="form-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { saveFriends }
)(AddFriendFrom);
