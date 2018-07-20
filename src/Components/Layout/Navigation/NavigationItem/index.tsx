import * as React from 'react';
import { Link } from 'react-router-dom';
import './NavigationItem.css';

interface IPage {
  name: string;
  path: string;
  icon?: any;
}

interface INavigationItemProps {
  page: IPage;
}

const NavigationItem: React.StatelessComponent<INavigationItemProps> = props => (
  <li className="NavigationItem">
    <Link className="NavigationItem-link" to={props.page.path}>
      {props.page.icon && props.page.icon}
      {` ${props.page.name}`}
    </Link>
  </li>
);

export default NavigationItem;
export { INavigationItemProps, IPage };

