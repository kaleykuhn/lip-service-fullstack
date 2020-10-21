import React from "react";

import mainLogo from "../../icons/lipservicelogo.png";
import SignUp from "../ui/SignUp";
import LogIn from "../ui/LogIn";

export default function Landing() {
   return (
      <div className="landing-background">
         <div className="container landing">
            <div className="row ">
               <div className="col-lg-1 offset-lg-0 offset-md-0 mt-8 ml-3 col-xl-3 offset-xl-2">
                  <img
                     className="logo mb-5 mt-7"
                     src={mainLogo}
                     height="280px"
                     alt="Lip service Landing Logo"
                  />
               </div>
            </div>

            <div className="row">
               <SignUp />
               <LogIn />
            </div>
         </div>
      </div>
   );
}
