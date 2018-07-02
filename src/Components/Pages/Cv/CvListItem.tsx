import * as React from 'react';
import './CvListItem.css';

interface IProps {
  text: string;
  url: string;
}

const CvListItem: React.StatelessComponent<IProps> = props => (
  <li className="CvListItem">
    <a className="CvListItem-link" href={props.url} target="_blank">
      {props.text}
    </a>
  </li>
);

export default CvListItem;
