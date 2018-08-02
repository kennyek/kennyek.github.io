import * as React from 'react';
import { StatelessComponent } from 'react';
import { IoDocumentText, IoEmail, IoStar } from 'react-icons/lib/io';
import { connect } from 'react-redux';
import Contact from 'src/components/applications/Contact';
import Cv from 'src/components/applications/Cv';
import PrivateProjects from 'src/components/applications/PrivateProjects';
import SchoolProjects from 'src/components/applications/SchoolProjects';
import AppWindow from 'src/components/AppWindow';
import AppDrawer from 'src/components/layout/AppDrawer';
import { IAppInfo, IState } from 'src/store';
import './App.css';

/** The props derived from the Redux store. */
interface IStateProps {
  /** All running applications indexed by their id. */
  applications: {
    /** A running application. */
    [id: number]: IAppInfo;
  }
}

/** The combined props for the component. */
type Props = IStateProps;

/**
 * Renders the application.
 * 
 * TODO: Remove hard coded icons in for in
 */
const App: StatelessComponent<Props> = props => {
  const { applications } = props;
  const apps = [];

  for (const id of Object.keys(applications)) {
    const application: IAppInfo = applications[id];

    apps.push(
      <AppWindow
        key={application.id}
        icon={application.name === 'Contact'
          ? <IoEmail />
          : application.name.endsWith('Projects')
            ? <IoStar />
            : <IoDocumentText />
        }
        {...application}
      />
    );
  }

  return (
    <div className="App">
      <AppDrawer>
        <Cv />
        <PrivateProjects />
        <SchoolProjects />
        <Contact />
      </AppDrawer>
      {apps}
    </div>
  );
}

/**
 * Provide the applications stored in state as props.
 * 
 * @param state The application state.
 */
function mapStateToProps(state: IState) {
  return {
    applications: state.applications
  };
}

export default connect(mapStateToProps)(App);
