import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Main.css';
import Contact from './Pages/Contact';
import Cv from './Pages/Cv';
import PrivateProjects from './Pages/PrivateProjects';
import SchoolProjects from './Pages/SchoolProjects';
import Start from './Pages/Start';

const Main: React.StatelessComponent<{}> = props => (
  <main className="Main">
    <Switch>
      <Route path='/' exact={true} component={Start} />
      <Route path='/cv' exact={true} component={Cv} />
      <Route path='/projects/school' exact={true} component={SchoolProjects} />
      <Route path='/projects/private' exact={true} component={PrivateProjects} />
      <Route path='/contact' exact={true} component={Contact} />
    </Switch>
  </main>
);

export default Main;
