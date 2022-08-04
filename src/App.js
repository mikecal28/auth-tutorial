import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.scss";
import LoginContainer from "./components/pages/auth/LoginContainer";
import DefaultContainer from "./components/pages/auth/DefaultContainer";

/*
createContext
useState, useReducer
*/

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route path="/" component={LoginContainer} />

        {/* <Route component={DefaultContainer} /> */}
      </Router>
    </div>
  );
}

export default App;

{
  /* <Redirect exact from="/" to="/login" /> */
}
