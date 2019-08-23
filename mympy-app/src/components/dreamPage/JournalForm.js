import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './journaList.css';
import { connect } from "react-redux";
import { addJournal } from '../../actions/journals';

const bodyStyle = {
  fontSize: "25px",
  height:"120px",
  marginTop:"40px",
  width: '200px'

}

const headStyle = {
  fontSize: "30px",
  color: '#1B5485',
  marginLeft: '150px'
 
}

class FormModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: true,
      journal: {
        title: '',
        body: '',
        user_id: null,
        dream_id: null
      },
      showModal: false
    };
  }

  componentDidMount = () => {
    this.setState({
      journal: {
        user_id: this.props.user,
        dream_id: this.props.dreams
      }
    })
  }
  handleChanges = e => {
    e.preventDefault()
    console.log(this.state.journal)
    this.setState({
        ...this.state,
        journal: {
            ...this.state.journal,
            [e.target.name]: e.target.value
        },
        showModal: true

    })
  
}

handleSubmit = e => {
  // e.preventDefault()
  this.setState({
      modal: true
  })

}

handleFinalSubmit = e => {

  const newJournal = { ...this.state.journal,}
  // e.preventDefault()
  console.log('submittedJournal: ', newJournal);
  this.props.addJournal(newJournal)
}


  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal}>
        <ModalHeader style={ headStyle } >Create A Journal</ModalHeader>
          <ModalBody style={ bodyStyle }>
          <div>
          <form>
                  <h1>Journal Title</h1>
                  <input name='title' id='title' onChange={this.handleChanges}></input>
                  <h1>Share Your Thoughts</h1>
                  <input name='body' id='body' onChange={this.handleChanges}></input> 
                  <button  onClick={this.handleFinalSubmit}>Submit</button>
           </form>

          </div>

          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ users, auth, dreams }) => {
    return {
        authZeroUser: users.authZeroUser,
        user: dreams.currDream.user_id,
        dreams: dreams.currDream.id
    }
}

export default connect(mapStateToProps, { addJournal })(FormModal);




