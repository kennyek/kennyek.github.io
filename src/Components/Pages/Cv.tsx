import * as React from 'react';
import './Cv.css';
import CvListItem from './Cv/CvListItem';

const Cv: React.StatelessComponent<{}> = props => (
  <div className="Cv">
    <h2 className="Cv-heading-2">Education</h2>
    <p className="Cv-paragraph"><strong>Web Development Programme 120hp (2017 - 2019)</strong></p>
    <p className="Cv-paragraph">
      Courses in JavaScript (both client and server), PHP, HTML, CSS,
      object-oriented programming with C#, object-oriented analysis and design,
      software quality, software testing, database theory, and programming for
      the web.
    </p>

    <h2 className="Cv-heading-2">Languages I've worked with</h2>
    <ul className="Cv-list">
      <CvListItem
        text="JavaScript"
        url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      />
      <CvListItem
        text="TypeScript"
        url="https://typescriptlang.org"
      />
      <CvListItem
        text="NodeJs"
        url="https://nodejs.org/en/about/"
      />
      <CvListItem
        text="C#"
        url="https://docs.microsoft.com/sv-se/dotnet/csharp/tour-of-csharp/index"
      />
      <CvListItem
        text="HTML"
        url="https://developer.mozilla.org/en-US/docs/Web/HTML"
      />
      <CvListItem
        text="CSS"
        url="https://developer.mozilla.org/en-US/docs/Web/CSS"
      />
      <CvListItem
        text="SASS"
        url="https://sass-lang.com"
      />
      <CvListItem
        text="Markdown"
        url="https://guides.github.com/features/mastering-markdown/#what"
      />
    </ul>

    <h2 className="Cv-heading-2">Frameworks/Techniques I've used</h2>
    <ul className="Cv-list">
      <CvListItem
        text="ExpressJs"
        url="https://expressjs.com"
      />
      <CvListItem
        text="React"
        url="https://reactjs.org"
      />
      <CvListItem
        text="Socket.IO"
        url="https://socket.io"
      />
      <CvListItem
        text="MongoDb"
        url="https://mongodb.com/what-is-mongodb"
      />
      <CvListItem
        text="Git"
        url="https://git-scm.com"
      />
      <CvListItem
        text="Github"
        url="https://github.com"
      />
      <CvListItem
        text="Dotnet Core"
        url="https://docs.microsoft.com/en-us/dotnet/core/"
      />
      <CvListItem
        text="JekyllRb"
        url="https://jekyllrb.com"
      />
      <CvListItem
        text="Nginx"
        url="https://nginx.com/resources/glossary/nginx/"
      />
      <CvListItem
        text="PM2"
        url="http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/"
      />
      <CvListItem
        text="Unity3D"
        url="https://unity3d.com/unity"
      />
    </ul>

    <h2 className="Cv-heading-2">Additional experience</h2>
    <ul className="Cv-list">
      <CvListItem
        text="UML"
        url="http://uml.org/what-is-uml.htm"
      />
      <CvListItem
        text="Scrum"
        url="https://scrum.org/resources/what-is-scrum"
      />
    </ul>
  </div>
);

export default Cv;
