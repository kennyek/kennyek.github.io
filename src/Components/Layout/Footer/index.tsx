import * as React from "react";
import { IWithClasses } from "../../../globalInterfaces";
import './Footer.css';

const Footer: React.StatelessComponent<IWithClasses> = props => (
  <footer className={`${props.classes && props.classes + ' '}Footer`}>
    &copy; Kenny Ek 2018
  </footer>
);

export default Footer;
