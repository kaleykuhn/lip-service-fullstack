import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import LipResult from "../ui/LipResult";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class LipResults extends React.Component {
   constructor(props) {
      super(props);

      axios
         .get("http://localhost:5000/api/v1/lipsticks")
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
      const updatedUser = this.props.currentUser;
      console.log("userTags", updatedUser);
      const lipsticks = this.props.lipstick;
      console.log(lipsticks);

      //const test2 = this.props.lipstick;

      //const userAnswers = {};
      let user = this.props.currentUser;
      let recomendations = [];

      // if (user === undefined) {
      // user = this.props.currentUser;
      // } else {
      //    user = this.props.location.results;
      // }
      console.log(this.props.currentUser);
      // if (lipsticks.length > 0 && user.tags.length > 0) {
      lipsticks.forEach((lipstick) => {
         console.log(lipstick);
         user.tags.forEach((tag) => {
            console.log(tag);
            if (tag.id === lipstick.tag) {
               console.log(lipstick.tag.id);
               recomendations.push(lipstick);
            }
         });
      });
      // }

      console.log("recomendations", recomendations);
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
               <div className="col mb-0"></div>
            </div>
            <div className="mb-5"></div>
            <div className="row">
               <div className="col"></div>
            </div>
            <div className="row">
               <div className="col">
                  <p className=" my-5  d-flex justify-content-left ">
                     These are your personalized lip matches.The buy now buttons
                     will instantly take you to purchase your personalized lip
                     color.You can save each look by clicking save below.
                  </p>
               </div>
            </div>
            <div className="row">
               {/* <LipResult lipstick={lipstickRecommendations[0]} />
               <LipResult lipstick={lipstickRecommendations[1]} />
               <LipResult lipstick={lipstickRecommendations[2]} />
               <LipResult lipstick={lipstickRecommendations[3]} /> */}

               {recomendations.map((match) => (
                  <LipResult lipstick={match} key={match.id} />
               ))}
            </div>

            {/* {users.map((lipresult) => {
               return <UsersList /> ; */}
            {/* {users.map((user) => {
               return <UsersList /> ;
               <LipResult  tags={lipResult.tags}} 
               />
               );
            })} 
               const user = [];
               const lipsticks = [];
               const lipsticks = [];
               const filteredLipsticks = lipsticks.filter((lipstick)) => {
                  return( 
                      lipstick.id === user.tags[0].id ||
                      lipstick.id === user.tags[1].id ||
                      lipstick.id === user.tags[2].id ||
                      lipstick.id === user.tags[3].id 
                  );
               });
                           
                        
   
            {
                  props.location.state.selectedLipsticks.map( selection => {
                   return ( <LipResult lipstick={lipsticks[selection] /> )
                  }
            
                  {memoryCards.map((memoryCard) => {
               return (
                  <MemoryCard
                     answer={memoryCard.answer}
                     imagery={memoryCard.imagery}
                     key={memoryCard.id}
                  />
               );
            
            */}

            <div className="mb-8"></div>
            <div className="mb-8"></div>
            <Link
               to="/your-looks"
               className="btn btn-outline-danger btn-lg float-right"
               id="nextButton"
            >
               Save
            </Link>
            <Link
               to="/lip-service-quiz"
               className="btn btn-link ml-0 mb-0"
               id="backButton"
            >
               Back
            </Link>

            <div className="mb-8"></div>
         </AppTemplate>
      );
   }
}
function mapStateToProps(state) {
   return {
      lipstick: state.lipstick,
      currentUser: state.currentUser,
   };
}
export default connect(mapStateToProps)(LipResults);
