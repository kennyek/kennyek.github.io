import * as React from 'react';
import { IoDocumentText, IoEmail, IoHome, IoStar } from 'react-icons/lib/io';
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';
import Main from '../Components/Layout/Main';
import Navigation from '../Components/Layout/Navigation';
import { IPage } from '../Components/Layout/Navigation/NavigationItem';
import './App.css';

const iconSize = 20;
const pages: IPage[] = [
  {
    icon: <IoHome size={iconSize} />,
    name: 'Start',
    path: '/'
  },
  {
    icon: <IoDocumentText size={iconSize} />,
    name: 'CV',
    path: '/cv'
  },
  {
    icon: <IoStar size={iconSize} />,
    name: 'School Projects',
    path: '/projects/school'
  },
  {
    icon: <IoStar size={iconSize} />,
    name: 'Private Projects',
    path: '/projects/private'
  },
  {
    icon: <IoEmail size={iconSize} />,
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
        <Header classes="header" />
        <Navigation classes="navigation" pages={pages} />
        <Main classes="main" />
        <Footer classes="footer" />
      </div>
    )
  }
}

export default App;
