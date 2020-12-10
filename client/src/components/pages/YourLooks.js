import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import YourLook from "../ui/YourLook";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import { withRouter } from "react-router-dom";

class YourLooks extends React.Component {
   constructor(props) {
      super(props);

      axios
         .get(`api/v1/lipsticks`)
         .then((res) => {
            // handle success
            console.log(res);
            console.log(res.data);
            props.dispatch({
               type: actions.STORE_LIPSTICK,
               payload: res.data,
            });
         })

         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   render() {
      const updatedUser = this.props.currentUserTags;
      console.log("userTags2", updatedUser);

      // let ids = this.props.currentUserTags.map((tag) => tag.id);
      // let uniqueSet = new Set(ids);
      // console.log("ID", ids);
      // console.log("unique", ...uniqueSet);
      // let newIdSet = [...uniqueSet];
      // console.log("new", newIdSet);
      // newIdSet.forEach((element) => console.log(element));

      const lipsticks = this.props.lipstick;
      console.log(lipsticks);

      //const test2 = this.props.lipstick;

      //const userAnswers = {};
      let user = this.props.currentUser;
      console.log("user", user);
      let recommendations = [];

      // if (user === undefined) {
      // user = this.props.currentUser;
      // } else {
      //    user = this.props.location.results;
      // }
      console.log(this.props.currentUser);

      lipsticks.forEach((lipstick) => {
         this.props.currentUserTags.forEach((tag) => {
            if (tag.id === lipstick.tag) {
               recommendations.push(lipstick);
            }
         });
      });

      console.log("recommendations", recommendations);
      const filteredRecommendations = [...new Set(recommendations)];
      console.log(filteredRecommendations);
      // const lipsticks = this.props.lipstick;

      // const lipstickRecommendations = lipsticks
      //    .map((lipstick) => {
      //       let timesMatched = 0;
      //       user.tags.forEach((tags) => {
      //          lipstick.forEach((tag) => {
      //             if (tag.tag.id === tags.id) timesMatched += 1;
      //          });
      //       });
      //       if (timesMatched > 0) lipstick.isRecommended = true;
      //       else lipstick.isRecommended = false;
      //       return lipstick;
      //    })
      //    .filter((lipstick) => lipstick.isRecommended);
      // console.log(lipstickRecommendations);

      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <div className="row">
               <div className="col mb-0">
                  {/* <h2 className="mb-0">Looks</h2> */}
               </div>
            </div>
            {/* <hr className="my-4"></hr> */}
            <div className="mb-5"></div>
            <div className="row">
               {/* <div className="col">
                  <h3 className="text-center">
                     Give your Lips the personality they deserve!
                  </h3>
               </div> */}
            </div>
            <div className="mb-5"></div>
            <div className="row">
               {/* <LipResult lipstick={lipstickRecommendations[0]} />
               <LipResult lipstick={lipstickRecommendations[1]} />
               <LipResult lipstick={lipstickRecommendations[2]} />
               <LipResult lipstick={lipstickRecommendations[3]}/> 
                const filteredRecommendations = [...new Set(recommendations)]*/}

               {filteredRecommendations.map((match) => (
                  <YourLook lipstick={match} key={match.id} />
               ))}
            </div>

            <hr className="my-4"></hr>

            <div className="mb-8"></div>
            <div className="mb-8"></div>
            <Link
               to="/your-looks"
               className="btn btn-outline btn-lg float-right btn-outline-secondary"
               id="clearButton"
            >
               Clear
            </Link>
            <Link
               to="/lip-service-quiz"
               className="btn btn-link btn-lg"
               id="looksbButton"
            >
               Back
            </Link>
            <div className="mb-8 ml-0"></div>
         </AppTemplate>
      );
   }
}
function mapStateToProps(state) {
   return {
      lipstick: state.lipstick,
      currentUser: state.currentUser,
      currentUserTags: state.currentUserTags,
   };
}
export default withRouter(connect(mapStateToProps)(YourLooks));
