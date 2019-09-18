import React from "react";
import { connect } from "react-redux";
import { deleteFriend } from "../store/actions";

const Friend=(props)=> {
  console.log(props)
  const removeFriend = () => {
    
     props.deleteFriend(props.friend);
 }
  return (
    <div className="FriendContainer">
      <div className="FriendInfo">
      <h3>Name: {props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
        </div>
      <button className="delete-button" onClick={removeFriend}>Delete</button>
    </div>
  );
}


export default connect(
 null,
  { deleteFriend }
)(Friend);

