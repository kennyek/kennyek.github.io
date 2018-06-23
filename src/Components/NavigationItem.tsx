import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationItem.css';

interface IProps {
  page: string;
}

const NavigationItem: React.StatelessComponent<IProps> = props => {
  const lowerCasePath = props.page.toLowerCase();
  const path = lowerCasePath === 'start' ? '' : lowerCasePath.replace(/\s/g, '_');

  return (
    <li className="NavigationItem">
      <Link className="NavigationItem-link" to={path}>
        {props.page}
      </Link>
    </li>
  );
}

export default NavigationItem;
