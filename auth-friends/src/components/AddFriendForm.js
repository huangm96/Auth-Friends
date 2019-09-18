import React, { useState,useEffect} from "react";
import { connect } from "react-redux";
import { saveFriends } from "../store/actions";

const AddFriendFrom = props => {
  const [checkForm, setCheckForm] = useState(false);
const [friendForm, setFriendForm] = useState({id:new Date(),name: "", age: "",email:'' });

const handleChange = e => {
  e.preventDefault();
  setFriendForm({ ...friendForm, [e.target.name]: e.target.value });
};
const handleSubmit = e => {
  e.preventDefault();
  if (!friendForm) {
    props.saveFriends(friendForm)
  
    setFriendForm({ name: "", age: "", email: "" });
  } else {
    setCheckForm(true);
  }
};
    

  return (
    <div className="FriendFormContainer">
      {checkForm ? <div className="errorMessage-friendForm">ERROR! Please Check Your Form!!!</div>:null}
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};


export default connect(
  null,
  { saveFriends }
)(AddFriendFrom);

