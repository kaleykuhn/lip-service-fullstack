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
      {
         lipsticks.forEach((lipstick) => {
            this.props.currentUserTags.forEach((tag) => {
               if (tag.id == lipstick.tag) {
                  recommendations.push(lipstick);
               }
            });
         });
      }

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

            {/*{filteredRecommendations.map((match) => (
                  <YourLook lipstick={match} />
               ))}
            
            
            
            {users.map((lipresult) => {
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

// import React from "react";
// import Header from "../ui/Header";
// import appLogo from "../../img/comfortmattetemperud.jpg";
// import Navigation from "../ui/Navigation";
// import AppTemplate from "../ui/AppTemplate";
// import { Link } from "react-router-dom";
// import exHitchHike from "../../img/hitchhikeexample.jpg";
// export default function YourLooks() {
//    return (
//       <AppTemplate>
//          <Header />
//          <Navigation />

//          {/* <h2>Looks</h2>
//          <hr className="my-4"></hr>
//          <div className="mb-5"></div>
//          <div className="row">
//             <div className="col">
//                <h3 className="text-center mb-5">
//                   Give your Lips the personality they deserve!
//                </h3>
//             </div>
//          </div>

//          <div
//             className="card bg-light mb-0"
//             style={{ maxWidth: "18rem" }}
//          ></div>
//          <div className="card-header">Match</div>
//          <div className="card-body">
//             <img
//                src={appLogo}
//                width="46px;"
//                alt="Lip Service Lips"
//                className="mb-2"
//             />
//             <img
//                src={exHitchHike}
//                width="182px;"
//                alt="Lip Service Lips"
//                className=" float-right"
//             />
//             <div className="mb-0"></div>
//             <h4 className="cardfontcolor"> Name: Hitch Hike</h4>
//             <h4 className="cardfontcolor"> Color: Brick Rose</h4>
//             <h4 className="cardfontcolor"> Finish: Comfort Matte</h4>
//             <h4 className="cardfontcolor"> Brand: Urban Decay</h4>
//             <a
//                href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
//                className="btn btn-primary float-right btn-sm  "
//             >
//                Buy Now
//             </a>
//             <h5 className="card-title">Light card title</h5>
//             <p className="card-text cardfontcolor">
//                {" "}
//                <br></br>
//                Brick rose with a Comfort Matte finish. It's a medium-dark rosy
//                plum with warm undertones and a creamy finish. It has a rich
//                color payoff with a very smooth, creamy consistency that glides
//                onto lips and just makes lips look plumper. This creamy formula
//                is loaded with nourishing ingredients.
//             </p>
//             <div>
//                <button className="btn btn-danger mt-2">delete</button>
//             </div>
//          </div>
//          <div className="card bg-light mb-0" style={{ maxWidth: "18rem" }} />
//          <div className="card-header">Match</div>
//          <div className="card-body">
//             <img
//                src={appLogo}
//                width="46px;"
//                alt="Lip Service Lips"
//                className="mb-2"
//             />
//             <img
//                src={exHitchHike}
//                width="182px;"
//                alt="Lip Service Lips"
//                className=" float-right"
//             />
//             <div className="mb-0"></div>
//             <h4 className="cardfontcolor"> Name: Hitch Hike</h4>
//             <h4 className="cardfontcolor"> Color: Brick Rose</h4>
//             <h4 className="cardfontcolor"> Finish: Comfort Matte</h4>
//             <h4 className="cardfontcolor"> Brand: Urban Decay</h4>
//             <a
//                href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
//                className="btn btn-primary float-right btn-sm  "
//             >
//                Buy Now
//             </a>
//             <h5 className="card-title">Light card title</h5>
//             <p className="card-text cardfontcolor">
//                {" "}
//                <br></br>
//                Brick rose with a Comfort Matte finish. It's a medium-dark rosy
//                plum with warm undertones and a creamy finish. It has a rich
//                color payoff with a very smooth, creamy consistency that glides
//                onto lips and just makes lips look plumper. This creamy formula
//                is loaded with nourishing ingredients.
//             </p>
//             <div>
//                <button className="btn btn-danger mt-2">delete</button>
//             </div>
//          </div>
//          <div className="mb-0"></div>
//          <div className="card bg-light mb-0" style={{ maxWidth: "18rem" }} />
//          <div className="card-header">Match</div>
//          <div className="card-body">
//             <img
//                src={appLogo}
//                width="46px;"
//                alt="Lip Service Lips"
//                className="mb-2"
//             />
//             <img
//                src={exHitchHike}
//                width="182px;"
//                alt="Lip Service Lips"
//                className=" float-right"
//             />
//             <div className="mb-0"></div>
//             <h4 className="cardfontcolor"> Name: Hitch Hike</h4>
//             <h4 className="cardfontcolor"> Color: Brick Rose</h4>
//             <h4 className="cardfontcolor"> Finish: Comfort Matte</h4>
//             <h4 className="cardfontcolor"> Brand: Urban Decay</h4>
//             <a
//                href="https://www.urbandecay.com/vice-lipstick-by-urban-decay/ud771.html"
//                className="btn btn-primary float-right btn-sm  "
//             >
//                Buy Now
//             </a>
//             <h5 className="card-title">Light card title</h5>
//             <p className="card-text cardfontcolor">
//                {" "}
//                <br></br>
//                Brick rose with a Comfort Matte finish. It's a medium-dark rosy
//                plum with warm undertones and a creamy finish. It has a rich
//                color payoff with a very smooth, creamy consistency that glides
//                onto lips and just makes lips look plumper. This creamy formula
//                is loaded with nourishing ingredients.
//             </p>
//             <div>
//                <button className="btn btn-danger mt-2">delete</button>
//             </div>
//          </div>

//          <hr className="my-4"></hr>

//          <div className="my-8">
//             <Link
//                to="/lip-results"
//                className="btn btn-outline-secondary btn-lg "
//                id="nextButton"
//             >
//                Back
//             </Link>
//             <Link
//                to="/lip-results"
//                className="btn btn-outline-danger btn-lg float-right "
//                id="nextButton"
//             >
//                Clear
//             </Link>
//          </div> */}
//       </AppTemplate>
//    );
// }
