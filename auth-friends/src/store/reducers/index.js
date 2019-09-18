import { FETCHING_FRIENDS_START, FETCHING_FRIENDS_SUCCESS, SAVING_FRIENDS } from "../actions";
const initialState = {
 isFetching: false,
  friends:[]
  
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_FRIENDS_SUCCESS:
      console.log(action.payload);
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
