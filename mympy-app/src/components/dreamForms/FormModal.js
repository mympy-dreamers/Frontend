import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const bodyStyle = {
  fontSize: "25px",
  height:"120px",
  marginTop:"40px",
  

}

const headStyle = {
  fontSize: "22px",
  color: '#1B5485',
 
}

class FormModal extends React.Component {
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

export default FormModal;




