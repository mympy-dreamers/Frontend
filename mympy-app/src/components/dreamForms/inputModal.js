import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


const bodyStyle = {
  fontSize: "25px",
  height:"120px",
  marginTop:"40px",
  

}

const headStyle = {
  color:"red",
  fontSize: "22px",
  color: '#1B5485',
 
}



class InputModal extends React.Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.showModal}>
        <ModalHeader style={ headStyle }>Warning!!</ModalHeader>
          <ModalBody style={ bodyStyle}>
           "Are you sure you want to save your dream?"
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




