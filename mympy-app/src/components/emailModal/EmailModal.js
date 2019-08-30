import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { sendMail } from '../../actions';
import styled from 'styled-components';

const StyledEmailModal = styled.div`
  .contact-button {
    background: #FFD164;
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    border: none
  }
`

const bodyStyle = {
  fontSize: "1.3rem",
}

const headStyle = {
  fontSize: "2.3rem",
  color: 'red',
}

const headStyleNotLog = {
  fontSize: "2.3rem"
}

//EmailModal component
// Used in the Dreamer page and pop ups when the 'contact dreamer' button is pressed

class EmailModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      mailings: {
        userId: '',
        dreamId: '',
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.currDream !== prevProps.currDream) {
      this.setState({
        mailings: {
          userId: this.props.user.id,
          dreamId: this.props.currDream.user_id,
        }
      });
    }
  }

  handleMail = e => {
    e.preventDefault();
    this.props.sendMail({ user_id: this.state.mailings.userId, dreamer_id: this.state.mailings.dreamId });
    this.toggle();
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    const { isAuthenticated, loginWithRedirect } = this.props;

    return (
      <StyledEmailModal>
        <Button onClick={this.toggle} className="contact-button" outline color="info">Contact Dreamer</Button>{' '}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          {isAuthenticated ?
            <ModalHeader style={headStyle} toggle={this.toggle}>WARNING</ModalHeader> :
            <ModalHeader style={headStyleNotLog} toggle={this.toggle}>You must be logged in to contact a dreamer</ModalHeader>
          }

          {isAuthenticated &&
            <ModalBody style={bodyStyle}>
              Are you sure you would like to share your e-mail address with this Dreamer?
            </ModalBody>
          }

          {isAuthenticated ?
            <ModalFooter>
              <Button color="primary" onClick={this.handleMail}>Submit</Button>
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            :
            <ModalFooter>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  loginWithRedirect({})
                }}
              > Log in </Button>
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          }

        </Modal>
      </StyledEmailModal>
    );

  }

}//End of EmailModal

const mapStateToProps = ({ auth, dreams }) => {
  return {
    user: auth.user,
    currDream: dreams.currDream,
    isAuthenticated: auth.auth.isAuthenticated,
    loginWithRedirect: auth.auth.loginWithRedirect
  }
}

export default connect(mapStateToProps, { sendMail })(EmailModal);