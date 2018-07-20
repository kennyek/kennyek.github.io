export interface ICompetence {
  name: string;
  url: string;
  description?: string;
}

export interface ICompetences {
  additional: ICompetence[];
  languages: ICompetence[];
  techniques: ICompetence[];
}

export const competences: ICompetences = {
  additional: [
    {
      name: 'UML',
      url: 'http://uml.org/what-is-uml.htm'
    },
    {
      name: 'Scrum',
      url: 'https://scrum.org/resources/what-is-scrum'
    }
  ],
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
  ]
};
