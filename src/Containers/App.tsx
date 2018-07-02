import * as React from 'react';
import { IoDocumentText, IoEmail, IoHome, IoStar } from 'react-icons/lib/io';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Navigation from '../Components/Navigation';
import { IPage } from '../Components/NavigationItem';
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
        <Header />
        <Navigation pages={pages} />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
