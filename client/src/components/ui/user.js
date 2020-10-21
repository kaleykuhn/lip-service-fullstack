import React from "react";
import User from "./Users";

class UsersList extends React.Component {
   render() {
      return (
         <ul>
            {this.props.users.map((user) => {
               return <User user={user} key={user.id} />;
            })}
         </ul>
      );
   }
}
export default UsersList;
