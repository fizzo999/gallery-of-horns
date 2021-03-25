import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';
import { CardDeck } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <CardDeck>
        {data.map((eachObject, index) => {
          return (
            <div key={index} className={eachObject.keyword}>
              <HornedBeasts          
                image_url={eachObject.image_url}
                description={eachObject.description}
                keyword={eachObject.keyword}
                title={eachObject.title}
                horns={eachObject.horns}/>
            </div>
          )
        })}
        </CardDeck>
      </React.Fragment>
    )
  }
}

export default Main;
