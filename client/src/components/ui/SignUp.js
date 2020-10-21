import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUUid } from "uuid";
import { withRouter } from "react-router-dom";
import { EMAIL_REGEX } from "../../utils/helpers";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";

class SignUp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }
   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   async setEmailState(emailInput) {
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);

      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email. ",
            hasEmailError: true,
         });
      else if (EMAIL_REGEX.test(lowerCasedEmailInput) === false) {
         console.log("NOT a VALID EMAIL");
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   checkHasLocalPart(passwordInput, emailInput) {
      //split function return array of strings 0 gives local part
      //return passwordInput.includes(localPart);
      console.log(emailInput);
      const localPart = emailInput.split("@")[0];
      console.log("local", localPart);
      //includes method returns true or false
      //return passwordInput.includes(localPart);
      if (localPart === "") return false;
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart);
      //.includes will return a true or false
   }

   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);
      //can't be blank
      // must be at least 9 characters
      //cannot contain the local-part of the email
      //must have at least 3 unique characters
      const uniqChars = [...new Set(passwordInput)];
      console.log("Chars", uniqChars);
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         //return true if contains local part
         // then set error state
         this.setState({
            passwordError:
               "For your safety, your password cannot contain your email address",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "For your safety, your password must contain at least 3 unique characters",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   //setting the state of the application
   async validateAndCreateUser() {
      console.log("VALIDATE ME");
      //Email cannot be blank
      //must have valid email regex
      const emailInput = document.getElementById("signup-email-input").value;
      console.log(emailInput);
      const passwordInput = document.getElementById("signup-password-input")
         .value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUUid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
            tags: [],
         };
         console.log("Valid!!!!", user);
         axios
            .get("https://run.mocky.io/v3/d35a8f5c-4f55-4d37-b22a-11a74898a230")
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
         this.props.history.push("/lip-service-quiz");
      }
   }

   render() {
      return (
         <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-6 offset-lg-1 col-lg-5 offset-xl-2 col-xl-4 mb-12 mt-9 mb-9 py-2 special-card">
            <div className="card">
               <div className="card-body text-dark bg-white rounded">
                  <h2 className="card-title">Nice to Meet You</h2>
                  <p className="card-title">Sign up. Let your Lips Shine</p>

                  <div className="" id="form1">
                     {this.state.isDisplayingInputs && (
                        <>
                           {" "}
                           <p className="text-success mb-4">
                              let's get you signed up
                           </p>
                           <label
                              htmlFor="signup-email-input"
                              className="text-muted"
                           >
                              Email address
                           </label>
                           {this.state.emailError !== ""}
                           <input
                              type="email"
                              className={classnames({
                                 "form-control": true,
                                 "mb-2": true,
                                 "is-invalid": this.state.hasEmailError,
                              })}
                              id="signup-email-input"
                              aria-describedby="emailHelp"
                              placeholder=""
                           />
                           {this.state.hasEmailError && (
                              <p className="text-danger mb-4">
                                 {this.state.emailError}
                              </p>
                           )}
                           <div className="mb-4"></div>
                           <label
                              htmlFor="signup-password-input"
                              className="text-muted"
                           >
                              Password
                           </label>
                           <input
                              type="password"
                              className={classnames({
                                 "form-control": true,
                                 "is-invalid": this.state.hasPasswordError,
                              })}
                              id="signup-password-input"
                              placeholder=""
                           />
                           {this.state.hasPasswordError && (
                              <p className="text-danger">
                                 {this.state.passwordError}
                              </p>
                           )}
                           <button
                              className="btn btn-success btn-block mt-6"
                              id="letsgo-button-landing"
                              onClick={() => {
                                 this.validateAndCreateUser();
                              }}
                           >
                              Let's go
                           </button>
                        </>
                     )}

                     {!this.state.isDisplayingInputs && (
                        <button
                           className="btn btn-block btn-success"
                           onClick={() => {
                              this.showInputs();
                           }}
                        >
                           Sign Up
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
function mapStateToProps(currentUser) {
   return {};
}
export default withRouter(connect(mapStateToProps)(SignUp));
