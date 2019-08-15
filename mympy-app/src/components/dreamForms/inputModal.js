import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



class InputModal extends React.Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.showModal}>
        <ModalHeader>Warning!!</ModalHeader>
          <ModalBody>
           "Are you sure to save your dream?"
          </ModalBody>
          <ModalFooter>
              <Button onClick={this.props.closeModal}>Okey</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default InputModal;




