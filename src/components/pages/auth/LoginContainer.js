import { Switch, Route } from "react-router-dom";

import LoginPage from "../LoginPage";
import HomePage from "../HomePage";

function LoginContainer() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default LoginContainer;
