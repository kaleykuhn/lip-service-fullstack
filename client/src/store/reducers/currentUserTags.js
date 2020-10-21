import actions from "../actions";

export default function currentUserTags(currentUserTags = [], action) {
   // action.GET_User = "GET_USER"
   switch (action.type) {
      case actions.UPDATE_ALL_CURRENT_USER_TAGS:
         return currentUserTags.concat(action.payload);
      default:
         return currentUserTags;
   }
}
