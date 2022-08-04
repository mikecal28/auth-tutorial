import { Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard";

function DefaultContainer() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default DefaultContainer;
