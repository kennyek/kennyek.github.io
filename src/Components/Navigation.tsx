import * as React from 'react';
import '../styles/Navigation.css';
import NavigationItem from './NavigationItem';

interface IProps {
  currentPage: string;
  pages: string[];
}

const Navigation: React.StatelessComponent<IProps> = props => (
  <nav className="Navigation">
    <ul className="Navigation-list">
      {props.pages.map((page, index) =>
        <NavigationItem key={index} page={page} />)
      }
    </ul>
  </nav>
);

export default Navigation;
