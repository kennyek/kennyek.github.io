import * as React from 'react';
import '../../../styles/CvPageListItem.css';

interface IProps {
  text: string;
  url: string;
}

const CvPageListItem: React.StatelessComponent<IProps> = props => (
  <li className="CvPageListItem">
    <a className="CvPageListItem-link" href={props.url} target="_blank">
      {props.text}
    </a>
  </li>
);

export default CvPageListItem;
