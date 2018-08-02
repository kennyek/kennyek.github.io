import * as React from 'react';
import { StatelessComponent } from 'react';
import { IoEmail } from 'react-icons/lib/io';
import AppLauncher from 'src/components/layout/AppDrawer/AppLauncher';
import data from 'src/data';

/** Renders an AppLauncher with specified settings for a Contact application. */
const Contact: StatelessComponent<{}> = props => (
  <AppLauncher data={data.contact} name="Contact" icon={<IoEmail />} />
);

export default Contact;
