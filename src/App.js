import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hornsData: data,
    }
  }
  render () {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Main hornObjectsArray={this.state.hornsData}/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }

}

export default App;
