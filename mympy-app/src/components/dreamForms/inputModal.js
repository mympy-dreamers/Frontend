import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import './dreamCard.css';

const bodyStyle = {
  fontSize: "25px",
  height: "120px",
  marginTop: "40px",


}

const headStyle = {
  color: '#1B5485',
  fontSize: "22px",
  // color: '#1B5485',

}


//Verifies if you want to create a dream 
class InputModal extends React.Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.showModal}>
          <ModalHeader style={headStyle}>Warning!!</ModalHeader>
          <ModalBody style={bodyStyle}>
            "Are you sure you want to save your dream?"
          </ModalBody>
          <ModalFooter>
            <Button id='cancel-button' onClick={() => this.props.closeModal()}>Cancel</Button>
            <Button onClick={() => {
              this.props.closeModal()
              this.props.handleFinalSubmit()
            }}>Submit Dream</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default InputModal;




