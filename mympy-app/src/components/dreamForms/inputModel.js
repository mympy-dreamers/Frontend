import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



class InputModel extends React.Component {
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
        <ModalHeader style={ headStyle } >Warning!!</ModalHeader>
          <ModalBody style={ bodyStyle }>
            Click the button to save Dream!
          </ModalBody>
          <ModalFooter>
              <Button>Okey</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default InputModel;




