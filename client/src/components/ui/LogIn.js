import React from "react";
import classnames from "classnames";
import { v4 as getUUid } from "uuid";
import hash from "object-hash";
import { withRouter } from "react-router-dom";
import { EMAIL_REGEX } from "../../utils/helpers";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";

class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         emailError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   validateAndLogUser() {
      this.setState({
         isDisplayingInputs: true,
      });
   }
   //set email state
   async setEmailState(emailInput) {
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);

      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email.",
            hasEmailError: true,
         });
      else if (!EMAIL_REGEX.test(lowerCasedEmailInput)) {
         console.log("NOT a VALID EMAIl");
         this.setState({
            emailError: "Please enter a valid email.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }
   // set state of password
   async setPasswordState(passwordInput) {
      console.log(passwordInput);
      //can't be blank
      // must be at least 9 characters
      //cannot contain the local-part of the email
      //must have at least 3 unique characters
      const uniqChars = [...new Set(passwordInput)];
      console.log(uniqChars);
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter your password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }
   //setting the state of App
   async validateAndLogInUser() {
      console.log("VALIDATE ME");
      //Email cannot be blank
      //must have valid email regex
      const emailInput = document.getElementById("login-email-input").value;
      console.log(emailInput);
      const passwordInput = document.getElementById("login-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         //create user object
         const user = {
            id: getUUid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
            tags: [],
         };
         console.log("Valid!!!!", user);
         axios
            .get("https://run.mocky.io/v3/66f6261a-d9d8-4104-8545-968e3c388e09")
            .then((res) => {
               // handle success
               const currentUser = res.data[0];
               console.log("CURRENT", currentUser);

               this.props.dispatch({
                  type: actions.UPDATE_CURRENT_USER,
                  payload: currentUser,
               });
               this.props.dispatch({
                  type: actions.UPDATE_ALL_CURRENT_USER_TAGS,
                  payload: currentUser.tags,
               });
            })

            .catch((error) => {
               // handle error
               console.log(error);
            });
         //this.props.history.push("/lip-service-quiz");

         //redirect the user
         this.props.history.push("/lip-service-quiz");
      }
   }

   render() {
      return (
         <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-6 offset-lg-1 col-lg-4 offset-xl-1 col-xl-4 mb-6 mt-9 special-card">
            <div className="card">
               <div className="card-body text-dark bg-white rounded">
                  <h2 className="card-title">Welcome back</h2>
                  <p className="card-title">
                     Log in with your email address and password.
                  </p>

                  <p className="text-success"></p>
                  <label htmlFor="login-email-input" className="text-muted">
                     Email address
                  </label>
                  <input
                     type="email"
                     className={classnames({
                        "form-control": true,
                        "is-invalid": this.state.hasEmailError,
                     })}
                     id="login-email-input"
                     aria-describedby="emailHelp"
                     placeholder=""
                  />
                  {this.state.hasEmailError && (
                     <p className="text-danger loginerror">
                        {this.state.emailError}
                     </p>
                  )}

                  <label htmlFor="login-password-input" className="text-muted">
                     Password
                  </label>
                  <input
                     type="password"
                     className={classnames({
                        "form-control": true,
                        "is-invalid": this.state.hasPasswordError,
                     })}
                     id="login-password-input"
                     placeholder=""
                  />
                  {this.state.hasPasswordError && (
                     <p className="text-danger loginerror">
                        {this.state.passwordError}
                     </p>
                  )}

                  <button
                     type="button"
                     className="btn btn-success float-right mt-6"
                     onClick={() => {
                        this.validateAndLogInUser();
                     }}
                  >
                     Log in
                  </button>
               </div>
            </div>
         </div>
      );
   }
}
function mapStateToProps(currentUser) {
   return {};
}
export default withRouter(connect(mapStateToProps)(Login));
