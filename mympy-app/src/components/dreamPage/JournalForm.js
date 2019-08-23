import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './journaList.css';
import { connect } from "react-redux";
import { addJournal } from '../../actions';
import axios from "axios";

const bodyStyle = {
  fontSize: "25px",
  height:"440px",
  marginTop:"40px",
}

const headStyle = {
  fontSize: "30px",
  color: '#1B5485',
  paddingLeft: '145px',

}

const journalForm = {
  fontSize: "25px",
  width: '120%',
  paddingLeft: '70px',
  color: '#1B5485',
}

const h1 = {
  marginBottom: '15px',
  paddingLeft: '100px'
}

const h2 = {
  marginBottom: '15px',
  paddingLeft: '60px'
}

const inputStyle1 = {
  height: '70px',
  width: '325px',
  marginBottom: '30px',
  borderRadius: '5px'
}

const inputStyle2 = {
  height: '150px',
  width: '325px',
  marginBottom: '30px',
  borderRadius: '5px'
}

const journalSubmitButton = {
    height: '40px',
    width: '120px',
    borderRadius: '5rem',
    fontSize: '20px',
    marginLeft: '100px',
    backgroundColor: '#A1F85C',
    marginBottom: '20px'
}

const journalFormStyle = {
  width: '120%'
}


class FormModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: true,
      journal: {
        title: '',
        body: '',
        dream_id: null,
      }
    };
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

    })
}

handleSubmit = e => {
  // e.preventDefault()
  this.setState({
      modal: true
  })
}



handleFinalSubmit = e => {
  const newJournal = { ...this.state.journal }
  // e.preventDefault()
  console.log('submittedDream: ', newJournal);
  this.props.addDream(newJournal)
  this.setState({ showModal: false }, () => {
      this.props.history.push(this.state.body)
  })
}

async componentDidMount() {
  try { let res = await axios.get('http://localhost:5000/market/');
      this.setState({journal: res.data})
    console.log(this.state.journal)} catch(err){
      console.error(err)
      }
  }

  render() {
    return (
      <div style={journalFormStyle}>
        <Modal isOpen={this.state.modal}>
        <ModalHeader style={ headStyle } >Create A Journal</ModalHeader>
          <ModalBody style={ bodyStyle }>
          <div>
          <form onSubmit style={journalForm}>
                  <h1 style={h1}>Journal Title</h1>
                  <input style={inputStyle1} name='title' id='title' onChange={this.handleChanges}></input>
                  <h1 style={h2}>Share Your Thoughts</h1>
                  <input style={inputStyle2} name='body' id='body' onChange={this.handleChanges}></input> 
                  <button style={journalSubmitButton} onClick={this.handleFinalSubmit}>Submit</button>
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

const mapStateToProps = ({ users, auth }) => {
    return {
        authZeroUser: users.authZeroUser,
        user: auth.user
    }
}

export default connect(mapStateToProps, { addJournal })(FormModal);




