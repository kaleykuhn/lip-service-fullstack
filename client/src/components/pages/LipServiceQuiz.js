import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import appLogo from "../../icons/rote-lippen.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import actions from "../../store/actions";

class LipServiceQuiz extends React.Component {
   constructor() {
      super();
      // axios
      //    .get(
      //       "https://raw.githubusercontent.com/kaleykuhn/lip-service/master/src/mock-data/user.json"
      //    )
      //    .then(function (response) {
      //       // handle success
      //       console.log(response);
      //    })
      //    .catch(function (error) {
      //       // handle error
      //       console.log(error);
      //    });

      this.state = {
         user: {},
         describeYourselfAnswer: {},
         friendAnswer: {},
         valueAnswer: {},
         exhibitAnswer: {},
         /* user: {}
            quiz answers: {}
            index of answer: 0
         */
      };
   }
   setDescribeYourselfAnswer(e) {
      const tag = { id: e.target.id, answer: e.target.value };
      this.setState({ describeYourselfAnswer: tag });
      console.log("describe", this.state.describeYourselfAnswer);
   }
   setFriendAnswer(e) {
      const tag = { id: e.target.id, answer: e.target.value };
      this.setState({ friendAnswer: tag });
      console.log(tag);
   }
   setValueAnswer(e) {
      const tag = { id: e.target.id, answer: e.target.value };
      this.setState({ valueAnswer: tag });
      console.log(tag);
   }
   setExhibitAnswer(e) {
      const tag = { id: e.target.id, answer: e.target.value };
      this.setState({ exhibitAnswer: tag });
      console.log(tag);
   }
   getUserInputs() {
      console.log(this.getUserInputs);
      console.log("test", this.state.describeYourselfAnswer);
      console.log("testtwo", this.state.friendAnswer);
      const tags = [
         this.state.describeYourselfAnswer,
         this.state.friendAnswer,
         this.state.valueAnswer,
         this.state.exhibitAnswer,
      ];

      const newUser = { ...this.props.currentUser };
      newUser.tags = tags;
      console.log("newUSER", newUser);
      this.setState({ user: newUser });
      this.props.dispatch({
         type: actions.UPDATE_CURRENT_USER_TAGS,
         payload: newUser,
      });
      this.props.dispatch({
         type: actions.UPDATE_ALL_CURRENT_USER_TAGS,
         payload: newUser.tags,
      });
      this.props.history.push("/lip-results");
      //this.props.history.push("/your-looks");

      // axios
      //    .get("https://run.mocky.io/v3/d35a8f5c-4f55-4d37-b22a-11a74898a230")
      //    .then((res) => {
      //       // handle success
      //       console.log(res);
      //       console.log(res.data);
      //       props.dispatch({
      //          type: actions.UPDATE_CURRENT_USER,
      //          payload: res.data,
      //       });
      //    })

      //    .catch((error) => {
      //       // handle error
      //       console.log(error);
      //    });
      //console.log(this.state.user);
      // this.props.history.push({
      //    pathname: "/lip-results",
      //    results: newUser,
      //});

      // replace user.tags with this array in state(set State)
   }
   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />

            <div className="mb-5"></div>

            <h3 className="text-center">
               Give your Lips the personality they deserve!
            </h3>

            <br></br>

            <div className="card border border-secondary">
               <img
                  src={appLogo}
                  width="46px;"
                  alt="Lip Service Lips"
                  className="mb-1 ml-2"
               />
               <div className="card-body bg-dark">
                  <p className="playful">
                     Which of the following most describes yourself ?
                  </p>
                  <div className="mb-3"></div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setDescribeYourselfAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="describe"
                        id="942d4afe-5370-400d-b71f-d9f61c644f3e"
                        value="Daring"
                     />
                     <label
                        className="custom-control-label d-inline"
                        htmlFor="942d4afe-5370-400d-b71f-d9f61c644f3e"
                     >
                        Daring
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setDescribeYourselfAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="describe"
                        id="d996f5fe-342a-42ba-bee8-329e78b13307"
                        value="Reserved"
                     />
                     <label
                        className="custom-control-label d-inline"
                        htmlFor="d996f5fe-342a-42ba-bee8-329e78b13307"
                     >
                        Reserved
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setDescribeYourselfAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="describe"
                        id="bc137dc8-74e1-402c-b2e3-f83a5aa75c32"
                        value="Compassionate"
                     />

                     <label
                        className="custom-control-label d-inline"
                        htmlFor="bc137dc8-74e1-402c-b2e3-f83a5aa75c32"
                     >
                        Compassionate
                     </label>
                  </div>
                  <div className="mb-4"></div>
               </div>
            </div>
            <div className="mb-5"></div>
            <div className="card border border-secondary">
               <img
                  src={appLogo}
                  width="46px;"
                  alt="Lip Service Lips"
                  className="mb-1 ml-2"
               />
               <div className="card-body bg-dark">
                  <p className="playful">
                     Which of these would your friends describe you as?
                  </p>
                  <div className="mb-3"></div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setFriendAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="friend"
                        id="89887a54-ce4c-40b3-968a-4a0e10c4f4ab"
                        value="Communicative"
                     />
                     <label
                        className="custom-control-label d-inline"
                        htmlFor="89887a54-ce4c-40b3-968a-4a0e10c4f4ab"
                     >
                        Communicative
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setFriendAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="friend"
                        id="194b8bb1-c609-4686-8772-8d84a850dc57"
                        value="Discreet"
                     />
                     <label
                        className="custom-control-label d-inline"
                        htmlFor="194b8bb1-c609-4686-8772-8d84a850dc57"
                     >
                        Discreet
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setFriendAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="friend"
                        id="9a7444b0-8b2f-40c6-91fd-0b57107f1d97"
                        value="Candid"
                     />
                     <label
                        className="custom-control-label d-inline"
                        htmlFor="9a7444b0-8b2f-40c6-91fd-0b57107f1d97"
                     >
                        Candid
                     </label>
                  </div>
                  <div className="mb-4"></div>
               </div>
            </div>
            <div className="mb-5"></div>
            <div className="card border border-secondary">
               <img
                  src={appLogo}
                  width="46px;"
                  alt="Lip Service Lips"
                  className="mb-1 ml-2"
               />
               <div className="card-body bg-dark">
                  I value which one of these qualities the most?
                  <div className="mb-3"></div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setValueAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="value"
                        id="57a75a90-1d93-427a-9913-9254843d373b"
                        value="Creativity"
                     />

                     <label
                        className="custom-control-label d-inline"
                        htmlFor="57a75a90-1d93-427a-9913-9254843d373b"
                     >
                        Creativity
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setValueAnswer(e);
                        }}
                        className="custom-control-input "
                        type="radio"
                        name="value"
                        id="a74c46e3-54d4-4694-a725-5b15e5e06689"
                        value="Decisiveness"
                     />

                     <label
                        className="custom-control-label d-inline"
                        htmlFor="a74c46e3-54d4-4694-a725-5b15e5e06689"
                     >
                        {" "}
                        Decisiveness
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setValueAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="value"
                        id="8bbe9a09-0d6d-45be-852d-b3346332bedc"
                        value="Sincerity"
                     />
                     <label
                        className="custom-control-label d-inline"
                        htmlFor="8bbe9a09-0d6d-45be-852d-b3346332bedc"
                     >
                        Sincerity
                     </label>
                  </div>
                  <div className="mb-4"></div>
               </div>
            </div>
            <div className="mb-5"></div>
            <div className=" card border border-secondary">
               <img
                  src={appLogo}
                  width="46px;"
                  alt="Lip Service Lips"
                  className="mb-1 ml-2"
               />
               <div className="card-body bg-dark">
                  Which of these qualities do I exhibit most?
                  <div className="mb-3"></div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setExhibitAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="exhibit"
                        id="ac1ab5d3-1c67-4afc-94c1-c2765efcaa9f"
                        value="Dominance"
                     />
                     <label
                        className="custom-control-label d-inline"
                        htmlFor="ac1ab5d3-1c67-4afc-94c1-c2765efcaa9f"
                     >
                        {" "}
                        Dominance
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setExhibitAnswer(e);
                        }}
                        className="custom-control-input "
                        type="radio"
                        name="exhibit"
                        id="5ae236f3-c9e4-4fc3-9f55-5322896c6c60"
                        value="Loyalty"
                     />
                     <label
                        className="custom-control-label d-inline"
                        htmlFor="5ae236f3-c9e4-4fc3-9f55-5322896c6c60"
                     >
                        Loyalty
                     </label>
                  </div>
                  <div className="custom-control custom-radio">
                     <input
                        onChange={(e) => {
                           this.setExhibitAnswer(e);
                        }}
                        className="custom-control-input"
                        type="radio"
                        name="exhibit"
                        id="08cc0730-3cd1-490c-a7f3-d3f44e14dede"
                        value="Open Mindedness"
                     />

                     <label
                        className="custom-control-label d-inline"
                        htmlFor="08cc0730-3cd1-490c-a7f3-d3f44e14dede"
                     >
                        Open-Mindedness
                     </label>
                  </div>
                  <div className="mb-4"></div>
               </div>
            </div>

            <div className="py-8">
               <button
                  className="btn btn-outline-primary btn-lg float-right "
                  id="submitButton"
                  onClick={() => this.getUserInputs()}
               >
                  Submit
               </button>
            </div>
         </AppTemplate>
      );
   }
}
function mapStateToProps(state) {
   return {
      currentUser: state.currentUser,
   };
}
export default withRouter(connect(mapStateToProps)(LipServiceQuiz));
