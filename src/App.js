import { Route } from "react-router-dom";

import "./styles.scss";
import LoginContainer from "./components/pages/auth/LoginContainer";
import DefaultContainer from "./components/pages/auth/DefaultContainer";
import { StandardUser } from "./components/helpers/userRoles";

/*
createContext
useState, useReducer
*/

function App() {
  return (
    <div className="app-container">
      <Route path="/" component={LoginContainer} />

      <StandardUser withRedirect>
        <Route component={DefaultContainer} />
      </StandardUser>
    </div>
  );
}

export default App;

{
  /* <Redirect exact from="/" to="/login" /> */
}
