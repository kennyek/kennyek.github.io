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

    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    const page = this.state.page;
    const pages = ['Start', 'Contact']

    return (
      <div className="App">
        <Header />
        <Navigation currentPage={page} onClick={this.handleClick} pages={pages} />
        <Main page={page} />
        <Footer />
      </div>
    )
  }

  private handleClick(page: string) {
    this.setState({ page });
  }
}

export default App;
