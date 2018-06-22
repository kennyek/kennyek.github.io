import * as React from 'react';
import '../styles/NavigationItem.css';

interface IProps {
  onClick: (page: string) => void;
  page: string;
}

const NavigationItem: React.StatelessComponent<IProps> = props => {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (!event.currentTarget.textContent) { return; }

    props.onClick(event.currentTarget.textContent.toLowerCase());
  }

  return (
    <li className="NavigationItem">
      <button onClick={handleClick}>{props.page}</button>
    </li>
  );
}

export default NavigationItem;
