import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <CardColumns>
        {this.props.hornObjectsArray.map((eachObject, index) => {
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
        </CardColumns>
      </React.Fragment>
    )
  }
}

export default Main;
