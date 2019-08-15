import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { sendMail } from '../../actions';


const bodyStyle = {
  fontSize: "1.3rem",
}

const headStyle = {
  fontSize: "2.3rem",
  color: 'red',
}

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

    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.currDream !== prevProps.currDream) {
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
    this.props.sendMail(this.state.mailings);
    this.toggle();
	}

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} className="contact-button" outline color="info">Contact Dreamer</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader style={ headStyle } toggle={this.toggle}>WARNING</ModalHeader>
          <ModalBody style={ bodyStyle }>
            Are you sure you would like to share your e-mail address with this Dreamer?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleMail}>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, dreams }) => {
  return {
    user: auth.user,
    currDream: dreams.currDream,
  }
}

export default connect(mapStateToProps, { sendMail })(EmailModal);