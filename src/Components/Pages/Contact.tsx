import * as React from 'react';
import './Contact.css';

const Contact: React.StatelessComponent<{}> = props => (
  <div className="Contact">
    <p className="Contact-paragraph">
      <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
      &nbsp;Github: <a href="https://github.com/kennyek" target="_blank">kennyek</a>
    </p>
    <p className="Contact-paragraph">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42"><path fill="#999" d="M2.3 11.2c1.1.5 16.1 8.1 16.7 8.3.6.3 1.3.4 2 .4s1.5-.1 2-.4c.6-.3 15.6-7.8 16.7-8.3 1.1-.5 2.1-2.2.1-2.2H2.2c-2 0-1 1.7.1 2.2zm37.8 4.2c-1.2.6-16.4 8-17.1 8.3-.8.4-1.3.4-2 .4s-1.3 0-2-.4c-.8-.3-15.9-7.7-17.1-8.3-.9-.4-.9.1-.9.4V31c0 .9 1.2 2 2.2 2h35.6c1 0 2.2-1.1 2.2-2V15.8c0-.3 0-.8-.9-.4z"/></svg>
      &nbsp;Mail: <a href="mailto:ke222kp@student.lnu.se">ke222kp@student.lnu.se</a>
    </p>
  </div>
);

export default Contact;
