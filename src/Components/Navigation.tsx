import * as React from 'react';
import '../styles/Navigation.css';
import NavigationItem, { IPage } from './NavigationItem';

interface INavigationProps {
  pages: IPage[];
}

const Navigation: React.StatelessComponent<INavigationProps> = props => (
  <nav className="Navigation">
    <ul className="Navigation-list">
      {props.pages.map((page, index) =>
        <NavigationItem key={index} page={page} />)
      }
    </ul>
  </nav>
);

export default Navigation;
export { INavigationProps };
