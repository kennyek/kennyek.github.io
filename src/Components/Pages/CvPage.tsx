import * as React from 'react';
import '../../styles/CvPage.css';
import CvPageListItem from './CvPage/CvPageListItem';

const CvPage: React.StatelessComponent<{}> = props => (
  <>
    <h2>Education</h2>
    <p><strong>Web Development Programme 120hp (2017 - 2019)</strong></p>
    <p>
      Courses in JavaScript (both client and server), PHP, HTML, CSS,
      object-oriented programming with C#, object-oriented analysis and design,
      software quality, software testing, database theory, and programming for
      the web.
    </p>

    <h2>Languages I've worked with</h2>
    <ul className="CvPage-list">
      <CvPageListItem
        text="JavaScript"
        url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      />
      <CvPageListItem
        text="TypeScript"
        url="https://typescriptlang.org"
      />
      <CvPageListItem
        text="NodeJs"
        url="https://nodejs.org/en/about/"
      />
      <CvPageListItem
        text="C#"
        url="https://docs.microsoft.com/sv-se/dotnet/csharp/tour-of-csharp/index"
      />
      <CvPageListItem
        text="HTML"
        url="https://developer.mozilla.org/en-US/docs/Web/HTML"
      />
      <CvPageListItem
        text="CSS"
        url="https://developer.mozilla.org/en-US/docs/Web/CSS"
      />
      <CvPageListItem
        text="SASS"
        url="https://sass-lang.com"
      />
      <CvPageListItem
        text="Markdown"
        url="https://guides.github.com/features/mastering-markdown/#what"
      />
    </ul>

    <h2>Frameworks/Techniques I've used</h2>
    <ul className="CvPage-list">
      <CvPageListItem
        text="ExpressJs"
        url="https://expressjs.com"
      />
      <CvPageListItem
        text="React"
        url="https://reactjs.org"
      />
      <CvPageListItem
        text="Socket.IO"
        url="https://socket.io"
      />
      <CvPageListItem
        text="MongoDb"
        url="https://mongodb.com/what-is-mongodb"
      />
      <CvPageListItem
        text="Git"
        url="https://git-scm.com"
      />
      <CvPageListItem
        text="Github"
        url="https://github.com"
      />
      <CvPageListItem
        text="Dotnet Core"
        url="https://docs.microsoft.com/en-us/dotnet/core/"
      />
      <CvPageListItem
        text="JekyllRb"
        url="https://jekyllrb.com"
      />
      <CvPageListItem
        text="Nginx"
        url="https://nginx.com/resources/glossary/nginx/"
      />
      <CvPageListItem
        text="PM2"
        url="http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/"
      />
      <CvPageListItem
        text="Unity3D"
        url="https://unity3d.com/unity"
      />
    </ul>

    <h2>Additional experience</h2>
    <ul className="CvPage-list">
      <CvPageListItem
        text="UML"
        url="http://uml.org/what-is-uml.htm"
      />
      <CvPageListItem
        text="Scrum"
        url="https://scrum.org/resources/what-is-scrum"
      />
    </ul>
  </>
);

export default CvPage;
