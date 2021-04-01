import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import React from 'react';
import SelectedBeast from './SelectedBeast';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayModal: false,
      hornsData: data,
      selectedBeast: {}
    }
  }

  showModal = (name) => {
    const selectedBeast = data.find(beast => beast.title === name);
    console.log(selectedBeast);

    this.setState({selectedBeast, displayModal: true});
  }

  hideModal = () => {
    this.setState({displayModal: false});
  }

  handleDropDown = (selection) => {
    if(selection === 'All') {
      this.setState({ hornsData: data});
    } else {
      const selectionArr = data.filter(element => element.horns === selection);
      this.setState({ hornsData: selectionArr});
    }
  }

  render () {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Main 
          hornObjectsArray={this.state.hornsData}
          showModal={this.showModal}
          handleDropDown={this.handleDropDown}
          />
          <SelectedBeast 
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
          />
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }

}

export default App;
