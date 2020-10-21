import React from "react";
import appLogo from "../../icons/rote-lippen.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

class Header extends React.Component {
   logoutCurrentUser() {
      this.props.dispatch({
         type: actions.UPDATE_CURRENT_USER,
         payload: {},
      });
   }
   render() {
      return (
         <div>
            <img
               src={appLogo}
               width="46px;"
               alt="Lip Service Lips"
               className="mb-1"
            />

            <h3 className="d-inline text-brand  black ml-3 " id="lipservefont">
               Lip Service
            </h3>

            <Link
               to="/"
               type="button"
               className="btn btn-link float-right black"
               onClick={() => {
                  this.logoutCurrentUser();
               }}
            >
               Log out
            </Link>
         </div>
      );
   }
}
function mapStateToProps(currentUser) {
   // redux store is state global
   return {};
}
export default connect(mapStateToProps)(Header);
