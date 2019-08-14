import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const bodyStyle = {
  fontSize: "1.3rem",
  height:"150px"
}

const headStyle = {
  fontSize: "2.3rem",
  color: 'green',
}

class SubmitModel extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: true,
    };
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal}>
        <ModalHeader style={ headStyle } >Congratulation!!!</ModalHeader>
          <ModalBody style={ bodyStyle }>
            Your dream was sucessfully created!
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SubmitModel;




