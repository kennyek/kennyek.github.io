/**
 * Properties common for all types of competence.
 *
 * @export
 * @interface ICompetence
 */
export interface ICompetence {
  /** Name of the competence. */
  name: string;

  /** URL to information about the competence. */
  url: string;

  /** Description of what competence I have. */
  description?: string;
}

/**
 * Object holding different types of competence.
 *
 * @export
 * @interface ICompetences
 */
export interface ICompetences {
  /** Miscellaneous competences not fitting any other catagory. */
  additional: ICompetence[];

  /** Programming languages I have experience of. */
  languages: ICompetence[];

  /** Techniques and frameworks I have experience of. */
  techniques: ICompetence[];
}

/**
 * Object holding contact information.
 *
 * @export
 * @interface IContactData
 */
export interface IContactData {
  /** Email address for contact. */
  email: string;

  /** Contact information through social media. */
  socialMedia: {
    /** Github account for contact. */
    github: ISocialMedia;

    /** LinkedIn account for contact. */
    linkedIn: ISocialMedia;

    /** Additional social media presence. */
    [key: string]: ISocialMedia;
  }
}

/**
 * Object representing a project I've worked on.
 *
 * @export
 * @interface IProjectData
 */
export interface IProjectData {
  /** Description of what the project is. */
  description: string;

  /** Name of the project. */
  name: string;

  /** URL to a runnable version of the project. */
  urlLiveVersion?: string;

  /** URL to the source code of the project. */
  urlSourceCode?: string;
}

/**
 * Different types of projects I've worked on.
 *
 * @export
 * @interface IProjectsData
 */
export interface IProjectsData {
  /** Projects I've worked on during my spare time. */
  private: IProjectData[];

  /** Projects I've worked on as school assignments. */
  school: IProjectData[];
}

/**
 * An object representing a social media presence.
 *
 * @export
 * @interface ISocialMedia
 */
export interface ISocialMedia {
  /** The URL to the account on the social media platform. */
  url: string;

  /** The username on the social media platform. */
  username: string;
}

// tslint:disable:object-literal-sort-keys
/**
 * My knowledges and experiences.
 * 
 * @export
 */
export const competences: ICompetences = {
  languages: [
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      name: 'TypeScript',
      url: 'https://typescriptlang.org'
    },
    {
      name: 'NodeJs',
      url: 'https://nodejs.org/en/about/'
    },
    {
      name: 'C#',
      url: 'https://docs.microsoft.com/sv-se/dotnet/csharp/tour-of-csharp/index'
    },
    {
      name: 'HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      name: 'CSS',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      name: 'SASS',
      url: 'https://sass-lang.com'
    },
    {
      name: 'Markdown',
      url: 'https://guides.github.com/features/mastering-markdown/#what'
    }
  ],
  techniques: [
    {
      name: 'ExpressJs',
      url: 'https://expressjs.com'
    },
    {
      name: 'React',
      url: 'https://reactjs.org'
    },
    {
      name: 'Redux',
      url: 'https://redux.js.org/'
    },
    {
      name: 'Socket.IO',
      url: 'https://socket.io'
    },
    {
      name: 'MongoDb',
      url: 'https://mongodb.com/what-is-mongodb'
    },
    {
      name: 'Git',
      url: 'https://git-scm.com'
    },
    {
      name: 'Github',
      url: 'https://github.com'
    },
    {
      name: 'Dotnet Core',
      url: 'https://docs.microsoft.com/en-us/dotnet/core/'
    },
    {
      name: 'JekyllRb',
      url: 'JekyllRb'
    },
    {
      name: 'Nginx',
      url: 'https://nginx.com/resources/glossary/nginx/'
    },
    {
      name: 'PM2',
      url: 'http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/'
    }
  ],
  additional: [
    {
      name: 'UML',
      url: 'http://uml.org/what-is-uml.htm'
    },
    {
      name: 'Scrum',
      url: 'https://scrum.org/resources/what-is-scrum'
    }
  ]
};
// tslint:enable:object-literal-sort-keys

/** Usernames for various social media sites. */
const usernames: { [site: string]: string } = {
  /** Username for Github. */
  github: 'kennyek',

  /** Username for LinkedIn. */
  linkedIn: 'kenny-ek-a425aa132'
};

/**
 * My contact information.
 * 
 * @export
 */
export const contact: IContactData = {
  email: 'ekkenny@hotmail.com',
  socialMedia: {
    github: {
      url: `https://github.com/${usernames.github}`,
      username: usernames.github
    },
    linkedIn: {
      url: `https://www.linkedin.com/in/${usernames.linkedIn}`,
      username: usernames.linkedIn
    }
  }
};

/**
 * Projects I've worked on.
 * 
 * @export
 */
export const projects: IProjectsData = {
  private: [
    {
      description:
        'Made this site with React, Redux and TypeScript. Since I made it ' +
        'with a tool for developing Single Page Applications, I figured I ' +
        'might have some fun and make it as an application rather than a ' +
        'regular web site. Inspired by the Personal Web Desktop assignment ' +
        'we got during the Client Based JavaScript course.',
      name: "This portfolio site.",
      urlLiveVersion: 'https://kennyek.github.io',
      urlSourceCode: 'https://github.com/kennyek/kennyek.github.io'
    }
  ],
  school: [
    {
      description: 'Not every project we made during school are described ' +
        'here, just the bigger ones worth mentioning. Also worth mentioning is ' +
        'that these have been made throughout the web developer programme, so ' +
        'there are inevitably quality differences.',
      name: 'Just worth mentioning...'
    },
    {
      description: 'TwentyOne JavaScript console "Game". We made this as an ' +
        'introduction to JavaScript in one of our introductory courses. It was ' +
        'mainly to experience different ways to create objects in JavaScript.' +
        'It is basically an automated game of 21 (card game), where the rounds' +
        'throughout the game are printed to the console.',
      name: 'TwentyOne in JavaScript'
    },
    {
      description: 'We made a single page application with Custom Elements ' +
        'and the shadow DOM during our course in client based JavaScript. It ' +
        'is an application emulating a computer desktop, with application ' +
        'launchers one can press to launch applications. Applications I made ' +
        'for the personal web desktop include a memory game, a drawing canvas ' +
        'and a chat application where one may send the canvas drawing and chat ' +
        'textually.',
      name: 'Personal Web Desktop'
    },
    {
      description: 'A simple CRUD application we made during our course in ' +
        'server based JavaScript. The application fetched stored code snippets ' +
        'from a database and displayed the content sanitized. It also allowed ' +
        'signed in users to add new code snippets to the databse. It is an ' +
        'Express server loading data from a mongoDB noSQL database. For ' +
        'displaying sanitized code I used the Pug templating engine. I used' +
        'Bootstrap for a responsive layout.',
      name: 'Sticky Snippets'
    },
    {
      description: 'The final project of the server based programming course. ' +
        'We made a site that fetched issues from a Github project immediately ' +
        'when they were issued using socket.io for real-time communication. ' +
        'We got run this project on a production server. I created an Ubuntu ' +
        'server on DigitalOcean, used Nginx as a reverse proxy and PM2 as a ' +
        'process manager. I used LetsEncrypt to create an SSL certificate to ' +
        'get HTTPS working.',
      name: 'Into the Wilds'
    },
    {
      description: 'Learning object-oriented principles/techniques, we got to ' +
        'work in C#. We got to make the 21 card game again, but this time with ' +
        'more legitimate object orientation. During this project I got to use ' +
        'a lot of different techniques, including inheritance, interfaces and ' +
        'null checks. The project was a console application made with Dotnet ' +
        'Core.',
      name: 'TwentyOne in C#'
    },
    {
      description: 'During the individual software project I made a conference ' +
        'app. My personal agenda during this course was to get experience with ' +
        'React and TypeScript. I made a single page application with React and ' +
        'TypeScript, communicating with an Express server I made with TypeScript ' +
        'as well. To communicate I set up a socket.io connection between the ' +
        'client and the server. The client had different rooms, each with their ' +
        'own whiteboard (HTML5 Canvas). When a person drew on on the whiteboard ' +
        'in one browser, the drawing appeared in the other browsers immediately. ' +
        'I got to experience React, TypeScript, unit testing with Jest and Enzyme ' +
        'and to work in an agile manner using a Scrum like methodology. ' +
        'The final result was not something I was satisfied with, but experience ' +
        'wise I got very much out of that project.',
      name: 'Conference App'
    }
  ]
};

export default {
  contact,
  cv: competences,
  projects
};
