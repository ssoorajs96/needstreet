import { Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
import Signin from "./screens/sign-in";
import Dashboard from "./screens/dashboard/index";
import Details from './screens/details';
import PrivateRoute from './PrivateRoute'

const AppNavigate = () => {
  return (
    <Switch>
      <Route exact path='/' component={Signin} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/details/:id" component={Details} />
    </Switch>
  )
}

export default AppNavigate;