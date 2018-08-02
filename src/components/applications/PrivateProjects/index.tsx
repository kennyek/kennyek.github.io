import * as React from 'react';
import { StatelessComponent } from 'react';
import { IoStar } from 'react-icons/lib/io';
import AppLauncher from 'src/components/layout/AppDrawer/AppLauncher';
import data from 'src/data';

/** Renders an AppLauncher with specified settings for a Private Projects application. */
const PrivateProjects: StatelessComponent<{}> = props => (
  <AppLauncher data={data.projects.private} name="Private Projects" icon={<IoStar />} />
);

export default PrivateProjects;
