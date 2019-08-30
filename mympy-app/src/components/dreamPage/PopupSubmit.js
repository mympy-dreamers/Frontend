import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const bodyStyle = {
  fontSize: "25px",
  height: "120px",
  marginTop: "40px",


}

const headStyle = {
  color: "red",
  fontSize: "22px"
}


//Is used to confirm entry into journal
class PopupSubmit extends React.Component {

  render() {
    return (
      <div>
        <Modal isOpen={this.props.showModal}>
          <ModalHeader style={headStyle}>Confirm</ModalHeader>
          <ModalBody style={bodyStyle}>
            Are you sure?
          </ModalBody>
          <ModalFooter>
            <Button id='cancel-button' onClick={() => this.props.closeModal()}>Cancel</Button>
            <Button onClick={(e) => {

              this.props.handleFinalSubmit(e)
              this.props.closeModal()
            }}>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopupSubmit;
