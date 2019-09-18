import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const getLogin = (info, props) => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/login", info)
    .then(res => {
      console.log(info);
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem("token", res.data.payload);
      props.history.push("/data");
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS_START });
  axiosWithAuth()
    .get("./friends")
    .then(res => {
      res.data.forEach(data => {
        dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: data });
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const SAVING_FRIENDS = "SAVING_FRIENDS";

export const saveFriends = friend => dispatch => {
  axiosWithAuth()
    .post("./friends", friend)
    .then(res => {
      console.log(res);
      dispatch({ type: SAVING_FRIENDS, payload: friend });
    })
    .catch(err => {
      console.log(err);
    });
};
