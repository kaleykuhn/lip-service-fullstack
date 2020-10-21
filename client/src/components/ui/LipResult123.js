import React from "react";

import exHitchHike from "../../img/hitchhikeexample.jpg";
import exBigBang from "../../img/exbigbang.jpg";
import Lovelight from "../../img/Lovelight.jpg";
import appLogo from "../../img/comfortmattetemperud.jpg";

export default class LipResult extends React.Component {
   render() {
      const lipstick = this.props.lipstick;

      return (
         <>
            <div className="card bg-light mb-0" style={{ maxWidth: "18rem" }} />
            <div className="card-header">Match</div>
            <div className="card-body">
               <img
                  src={appLogo}
                  width="46px;"
                  alt="Lip Service Lips"
                  className="mb-2"
               />
               <img
                  src={lipstick.modelImageUrl}
                  width="182px;"
                  alt="Lip Service Lips"
                  className="float-right"
               />
               <div className="mb-0"></div>
               <h4 id="cardfontcolor">{lipstick.name}</h4>
               <h4 id="cardfontcolor">{lipstick.color}</h4>
               <h4 id="cardfontcolor">{lipstick.finish}</h4>
               <h4 id="cardfontcolor"> {lipstick.brand}</h4>
               <a
                  href={lipstick.buyNowUrl}
                  className="btn btn-primary float-right btn-sm  "
               >
                  Buy Now
               </a>
               <h5 className="card-title">Light card title</h5>
               <p className="card-text" id="cardfontcolor">
                  {" "}
                  <br></br>
                  {lipstick.desc}
               </p>
            </div>
         </>
      );
   }
}
