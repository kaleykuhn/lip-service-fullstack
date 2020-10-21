import React from "react";
import "./style/master.scss"; //applies global scss styles
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //as assign as router
import Landing from "./components/pages/Landing";
import LipServiceQuiz from "./components/pages/LipServiceQuiz";
import LipResults from "./components/pages/LipResults";
import YourLooks from "./components/pages/YourLooks";
import NotFound from "./components/pages/NotFound";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
   return (
      <Router>
         <ScrollToTop />
         <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/lip-service-quiz" component={LipServiceQuiz} />
            <Route exact path="/lip-results" component={LipResults} />
            <Route exact path="/your-looks" component={YourLooks} />
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
