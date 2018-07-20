import * as React from 'react';
import { competences } from '../../../data';
import './Cv.css';
import CvListItem from './CvListItem';

const Cv: React.StatelessComponent<{}> = props => (
  <div className="Cv">
    <h2 className="Cv-heading-2">Education</h2>
    <h3 className="Cv-paragraph">
      Web Development Programme 120hp (2017 - 2019)
    </h3>
    <p className="Cv-paragraph">
      Courses in JavaScript (both client and server), PHP, HTML, CSS,
      object-oriented programming with C#, object-oriented analysis and design,
      software quality, software testing, database theory, and programming for
      the web.
    </p>

    <h2 className="Cv-heading-2">Languages I've worked with</h2>
    <ul className="Cv-list">
      {competences.languages.map((language, index) =>
        <CvListItem key={index} text={language.name} url={language.url} />
      )}
    </ul>

    <h2 className="Cv-heading-2">Frameworks/Techniques I've used</h2>
    <ul className="Cv-list">
      {competences.techniques.map((technique, index) =>
        <CvListItem key={index} text={technique.name} url={technique.url} />
      )}
    </ul>

    <h2 className="Cv-heading-2">Additional experience</h2>
    <ul className="Cv-list">
      {competences.additional.map((competence, index) =>
        <CvListItem key={index} text={competence.name} url={competence.url} />
      )}
    </ul>
  </div>
);

export default Cv;
