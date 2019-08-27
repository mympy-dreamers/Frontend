import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { sendMail } from '../../actions';
import Donate from '../stripe/Donate.js';

import styled from 'styled-components';

const StyledDonationModal = styled.div`
  .donate-btn {
    width: 144px;
    height: 70px;
    border-radius: 40px;
    background-color: #FFD164;
    color: black;
    font-size: 2.8em;
    font-weight: bold;
    font-family: Helvetica, sans-serif;;
    border: none;
    outline: none;
    margin-bottom: 56px;
  }
`

class DonationModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currDream !== prevProps.currDream) {
      this.setState({
      });
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { isAuthenticated, loginWithRedirect } = this.props;
    return (
      <StyledDonationModal>
        <button onClick={this.toggle} className="donate-btn" outline color="info">Donate</button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
          {isAuthenticated ? 
            <Donate /> : 
            <h4 style={{fontSize: '1.4rem'}}>You must be logged in to contact a dreamer</h4>}
          </ModalBody>

          {isAuthenticated ?
            <ModalFooter>
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter> :
            <ModalFooter>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  loginWithRedirect({})
                }}
              >Log in</Button>
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          }
        </Modal>
      </StyledDonationModal>
    );
  }
}

const mapStateToProps = ({ auth, dreams }) => {
  return {
    user: auth.user,
    currDream: dreams.currDream,
    isAuthenticated: auth.auth.isAuthenticated,
    loginWithRedirect: auth.auth.loginWithRedirect
  }
}

export default connect(mapStateToProps, { sendMail })(DonationModal);