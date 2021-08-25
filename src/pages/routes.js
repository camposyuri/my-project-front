import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPageComponent from "./dashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPageComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
