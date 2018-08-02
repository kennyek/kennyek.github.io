import * as React from 'react';
import { StatelessComponent } from 'react';
import { launchApplication } from 'src/actions';
import store from 'src/store';
import './AppLauncher.css';

/** Props for the AppLauncher component. */
interface IAppLauncherProps {
  /** The data used to display the content of the application. */
  data: object;

  /** The icon component to be rendered in the app drawer. */
  icon: JSX.Element;

  /** The name of the application to be displayed when hovering the launcher. */
  name: string;
}

/** Renders an icon which launches an application when clicked. */
const AppLauncher: StatelessComponent<IAppLauncherProps> = props => {
  const { data, icon, name } = props;

  /** Launches the application in a new window. */
  function handleClick() {
    store.dispatch(launchApplication(data, name));
  }

  return (
    <div className="AppLauncher">
      {React.cloneElement(
        icon,
        {
          className: 'AppLauncher-icon',
          onClick: handleClick
        }
      )}
    </div>
  );
}

export default AppLauncher;
