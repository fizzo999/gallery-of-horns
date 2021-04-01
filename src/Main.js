import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';

class Main extends Component {

  handleSelection = (event) => {
    if(event.target.value === 'All') {
      this.props.handleDropDown(event.target.value);
    } else {
      this.props.handleDropDown(+event.target.value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group controlId='hornsSelected'>
            <Form.Label>How many horns</Form.Label>
            <Form.Control onChange={this.handleSelection} as='select'>
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <CardDeck>
        {this.props.hornObjectsArray.map((eachObject, index) => {
          return (
            <div key={index} className={eachObject.keyword}>
              <HornedBeasts          
                image_url={eachObject.image_url}
                description={eachObject.description}
                keyword={eachObject.keyword}
                title={eachObject.title}
                horns={eachObject.horns}
                showModal={this.props.showModal}/>
            </div>
          )
        })}
        </CardDeck>
      </React.Fragment>
    )
  }
}

export default Main;
