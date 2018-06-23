import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Main.css';
import ContactPage from './Pages/ContactPage';
import CvPage from './Pages/CvPage';
import PrivateProjectsPage from './Pages/PrivateProjectsPage';
import StartPage from './Pages/StartPage';

interface IProps {
  page: string;
}

const Main: React.StatelessComponent<IProps> = props => (
  <main className="Main">
    <Switch>
      <Route path='/' exact={true} component={StartPage} />
      <Route path='/cv' exact={true} component={CvPage} />
      <Route path='/private_projects' exact={true} component={PrivateProjectsPage} />
      <Route path='/contact' exact={true} component={ContactPage} />
    </Switch>
  </main>
);

export default Main;
