import React,{useEffect,useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from './Friend'

const FriendsData=() =>{
    const [friends, setFriends] = useState([])
    console.log("friends: ", friends)
    useEffect(() => {
        axiosWithAuth()
            .get('./friends')
            .then(res => {
                console.log(res)
                setFriends(...friends, res.data)
                
            })
        .catch(err=>{console.log(err)})
},[])

  return (
    <div className="FriendsDataContainer">
      <h2>Friends List:</h2>
      <div className="FriendsContainer">
        {friends.map(f => {
          return <Friend friend={f} />;
        })}
      </div>
    </div>
  );
  
}

export default FriendsData;
