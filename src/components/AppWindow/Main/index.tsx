import * as React from 'react';
import { StatelessComponent } from 'react';
import { ICompetence, ICompetences, IContactData, IProjectData } from 'src/data';
import './Main.css';

/** Props for the Main component. */
export interface IMainProps {
  /** The data to be used in the application. */
  data: object;
}

/**
 * Displays the data in the content area of an application window.
 * 
 * TODO: Fix the hard coded handling of data.
 */
const Main: StatelessComponent<IMainProps> = props => {
  const { data } = props;

  return (
    <div className="Main">
      {
        data.hasOwnProperty('languages') && // For CV
        Object.keys((data as ICompetences)).map((key, competenceIndex) => (
          <div key={competenceIndex} className="Competence">
            <h2 className="Cv-heading-2">{key.toUpperCase()}</h2>
            <ul className="Cv-list">
              {
                (data[key] as ICompetence[]).map((competence: ICompetence, liIndex) => (
                  <li key={liIndex} className="Cv-list-item">
                    <a href={competence.url}>{competence.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        )) || data.hasOwnProperty('email') && // For Contact
        (
          <div className="Contact">
            <h2 className="Contact-heading-2">{'Contact'.toUpperCase()}</h2>
            <p className="Contact-email">EMAIL: {(data as IContactData).email}</p>
            <ul className="Contact-Social-Media-list">
              {Object.keys((data as IContactData).socialMedia).map((key, socialMediaIndex) => (
                <li key={socialMediaIndex} className="Contact-Social-Media-list-item">
                  {`${key.toUpperCase()}: `}
                  <a href={(data as IContactData).socialMedia[key].url}>
                    {(data as IContactData).socialMedia[key].username}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) || Array.isArray(data) && // For projects
        (data as IProjectData[]).map((project, projectIndex) => (
          <div key={projectIndex} className="Project">
            <h3 className="Projects-heading-3">{project.name}</h3>
            <p>{project.description}</p>
            {
              project.urlLiveVersion &&
              <a className="Project-link" href={project.urlLiveVersion}>
                <p>Link to live version</p>
              </a>
            }
            {
              project.urlSourceCode &&
              <a className="Project-link" href={project.urlSourceCode}>
                <p>Link to source code</p>
              </a>
            }
          </div>
        ))
      }
    </div>
  );
}

export default Main;
