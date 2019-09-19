import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriends } from "../store/actions";
import Friend from "./Friend";
import AddFriendFrom from "./AddFriendForm";

const FriendsData = props => {
 
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.getFriends();
    }
    },[]);

   
  return (
    <>
      <AddFriendFrom />
      <div className="FriendsDataContainer">
        <h2>Friends List:</h2>
        {props.isFetching ? (
          <h2>Loading...</h2>
        ) : (
          <div className="FriendsContainer">
            {props.friends.map(f => {
                return <Friend key={f.id} friend={f} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
const mapStateToProps = state => {
  
  return {
    friends: state.friends,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsData);
