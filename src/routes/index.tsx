import { Switch, Route } from 'react-router-dom';
import Team from '../components/Team';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Cs from '../pages/Sports/Cs';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cs" component={Cs} />
    <Route path="/cs/:teamId" component={Team} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
