import * as React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Navigation from '../Components/Navigation';
import '../styles/App.css';

interface IState {
  page: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { page: 'index' };
  }

  public render() {
    const page = this.state.page;
    const pages = [
      'Start',
      'CV',
      'School Projects',
      'Private Projects',
      'Contact'
    ]

    return (
      <div className="App">
        <Header />
        <Navigation currentPage={page} pages={pages} />
        <Main page={page} />
        <Footer />
      </div>
    )
  }
}

export default App;
