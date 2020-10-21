import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import lipstick from "./reducers/lipstick";
import currentUserTags from "./reducers/currentUserTags";

export default combineReducers({
   currentUser,
   lipstick,
   currentUserTags,
});
