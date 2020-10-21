import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
   const url = window.location.pathname;

   const tabActiveOnQuiz = (url) => {
      if (url.indexOf("lip-service-quiz") > 0) {
         return "tab-active";
      } else return "";
   };
   const tabActiveOnMatches = (url) => {
      if (url.indexOf("lip-results") > 0) {
         return "tab-active";
      } else return "";
   };
   const tabActiveOnLooks = (url) => {
      if (url.indexOf("your-looks") > 0) {
         return "tab-active";
      } else return "";
   };

   return (
      <div
         className="btn-group d-flex"
         role="navigation"
         aria-label="navigation"
      >
         <Link
            to="/lip-service-quiz"
            type="button"
            className={`btn btn-secondary ${tabActiveOnQuiz(url)} `}
         >
            Quiz
         </Link>

         <Link
            to="/lip-results"
            type="button"
            className={`btn btn-secondary tab-separator ${tabActiveOnMatches(
               url
            )} `}
         >
            Matches
         </Link>

         <Link
            to="/your-looks"
            type="button"
            className={`btn btn-secondary tab-separator ${tabActiveOnLooks(
               url
            )} `}
         >
            Looks
         </Link>
      </div>
   );
}
