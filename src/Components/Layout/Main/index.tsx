import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IWithClasses } from '../../../globalInterfaces';
import Contact from '../../Pages/Contact';
import Cv from '../../Pages/Cv';
import PrivateProjects from '../../Pages/PrivateProjects';
import SchoolProjects from '../../Pages/SchoolProjects';
import Start from '../../Pages/Start';
import './Main.css';

const Main: React.StatelessComponent<IWithClasses> = props => (
  <main className={`${props.classes && props.classes + ' '}Main`}>
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
