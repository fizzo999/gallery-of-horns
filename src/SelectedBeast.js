import React, { Component } from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.displayModal} onHide={this.props.hideModal} >
        <Modal.Dialog>
          <Modal.Header closeButton />
            <Modal.Body>
              <Card style={{ width: '25rem'}}>
                <Card.Img src={this.props.selectedBeast.image_url} />
                <Card.Body>
                  <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                  <Card.Text>{this.props.selectedBeast.description}</Card.Text>
                </Card.Body>
              </Card>
            </Modal.Body>
        </Modal.Dialog>        
      </Modal>
    )
  }
}

export default SelectedBeast;
