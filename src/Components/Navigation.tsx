import * as React from 'react';
import '../styles/Navigation.css';
import NavigationItem from './NavigationItem';

interface IProps {
  currentPage: string;
  onClick: (page: string) => void;
  pages: string[];
}

const Navigation: React.StatelessComponent<IProps> = props => {
  function handleClick(page: string) {
    props.onClick(page);
  }

  return (
    <nav className="Navigation">
      <ul className="Navigation-list">
        {props.pages.map((page, index) =>
          <NavigationItem key={index} onClick={handleClick} page={page} />)
        }
      </ul>
    </nav>
  )
};

export default Navigation;
