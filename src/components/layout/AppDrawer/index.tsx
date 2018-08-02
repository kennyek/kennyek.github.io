import * as React from 'react';
import { StatelessComponent } from 'react';
import './AppDrawer.css';

/** An area with application launchers to launch new applications. */
const AppDrawer: StatelessComponent<{}> = props => {
  return (
    <div className="AppDrawer">
      {props.children}
    </div>
  );
}

export default AppDrawer;
