import actions from "../actions";

export default function currentUser(currentUser = {}, action) {
   // action.GET_User = "GET_USER"
   switch (action.type) {
      case actions.UPDATE_CURRENT_USER:
         return action.payload;
      case actions.UPDATE_CURRENT_USER_TAGS:
         currentUser.tags = action.payload.tags;
         return currentUser;
      default:
         return currentUser;
   }
}
