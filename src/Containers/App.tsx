import * as React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Navigation from '../Components/Navigation';
import { IPage } from '../Components/NavigationItem';
import '../styles/App.css';

const pages: IPage[] = [
  {
    name: 'Start',
    path: '/'
  },
  {
    name: 'CV',
    path: '/cv'
  },
  {
    name: 'School Projects',
    path: '/projects/school'
  },
  {
    name: 'Private Projects',
    path: '/projects/private'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

interface IState {
  page: IPage;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { page: pages[0] };
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <Navigation pages={pages} />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
