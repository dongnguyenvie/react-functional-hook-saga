import * as TYPE from "../constant";
import { combineReducers } from "redux";

export const stateText = ["this is text default"];

export const textReducer = (state = stateText, action) => {
  // console.log(action)
  switch (action.type) {
    case TYPE.TEXT_SUCCESS: {
      return action.payload;
    }
    case TYPE.TEXT_ERROR: {
      return [];
    }
    default:
      return state;
  }
};

export default combineReducers({
  textReducer
});
