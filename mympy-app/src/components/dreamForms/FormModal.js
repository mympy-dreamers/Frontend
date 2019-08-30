import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const bodyStyle = {
  fontSize: "25px",
  height: "120px",
  marginTop: "40px",


}

const headStyle = {
  fontSize: "22px",
  color: '#1B5485',

}

//Modal that displays when one has successfully created a dream

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
          <ModalHeader style={headStyle} >Success!</ModalHeader>
          <ModalBody style={bodyStyle}>
            {this.props.body}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FormModal;




