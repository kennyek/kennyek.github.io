import * as React from 'react';
import { IWithClasses } from '../../../globalInterfaces';
import './Navigation.css';
import NavigationItem, { IPage } from './NavigationItem';

interface INavigationProps extends IWithClasses {
  pages: IPage[];
}

const Navigation: React.StatelessComponent<INavigationProps> = props => (
  <nav className={`${props.classes && props.classes + ' '}Navigation`}>
    <ul className="Navigation-list">
      {props.pages.map((page, index) =>
        <NavigationItem key={index} page={page} />)
      }
    </ul>
  </nav>
);

export default Navigation;
export { INavigationProps };

