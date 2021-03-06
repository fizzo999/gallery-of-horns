import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class HornedBeasts extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfLikes: 0
    };
  };
  
  
  render() {
    const likeImage = () => {
      this.setState({
        numberOfLikes: this.state.numberOfLikes + 1
      });
    };
    const clickModal = () => {
      this.props.showModal(this.props.title);
    }
    // const popOut = () => {
    //   this.props.displayAsModal(this.props.index);
    // };
    return (
      <Card style={{ width: '25rem' }} bg='light' text='dark' border='primary'>
        <Card.Img onClick={clickModal} variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
        <Card.Body onClick={likeImage}>
          <Card.Title><h2>{this.props.title}</h2></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><h5>Number of Horns: {this.props.horns}</h5></Card.Subtitle>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>❤️ {this.state.numberOfLikes}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeasts;
