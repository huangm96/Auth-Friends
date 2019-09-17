import React from "react";


const Friend=(props)=> {
  
  console.log(props);
  

  return (
    <div className="FriendContainer">
      <h3>Name: {props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  );
}

export default Friend;
