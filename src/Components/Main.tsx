import * as React from 'react';
import '../styles/Main.css';
import ContactPage from './ContactPage';

interface IProps {
  page: string;
}

const Main: React.StatelessComponent<IProps> = props => (
  <main className="Main">
    {props.page === 'start' ? "You're at the start page"
      : props.page === 'contact' ? <ContactPage />
      : 'Non-existent page'}
  </main>
);

export default Main;
