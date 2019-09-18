import {
  FETCHING_FRIENDS_START,
  FETCHING_FRIENDS_SUCCESS,
  SAVING_FRIENDS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions";
const initialState = {
  isFetching: false,
  isLogined: true,
  friends:[],
  signInErrorMessage: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogined: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        signInErrorMessage: true
      };
    case FETCHING_FRIENDS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_FRIENDS_SUCCESS:
      
      return {
        ...state,
        friends: [...state.friends, action.payload],
        isFetching: false
      };
    case SAVING_FRIENDS:
      console.log(action.payload);
      return {
        ...state,
        friends: [...state.friends, action.payload]
      };
    default:
      return state;
  }
};
