import * as React from 'react';
import { StatelessComponent } from 'react';
import { IoDocumentText } from 'react-icons/lib/io';
import AppLauncher from 'src/components/layout/AppDrawer/AppLauncher';
import data from 'src/data';

/** Renders an AppLauncher with specified settings for a CV application. */
const Cv: StatelessComponent<{}> = props => (
  <AppLauncher data={data.cv} name="CV" icon={<IoDocumentText />} />
);

export default Cv;
