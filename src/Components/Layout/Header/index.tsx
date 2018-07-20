import * as React from "react";
import { IWithClasses } from '../../../globalInterfaces';
import './Header.css';

const Header: React.StatelessComponent<IWithClasses> = props => (
  <header className={`${props.classes && props.classes + ' '}Header`}>
    <h1 className="Header-heading-1">Kenny Ek</h1>
    <p className="Header-text">Webbprogrammerare</p>
  </header>
);

export default Header;
