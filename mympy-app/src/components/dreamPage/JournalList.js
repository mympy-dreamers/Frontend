import React, { Component } from "react";
import "./journaList.css";
import FormModal from "../dreamPage/JournalForm";
import Accordion from 'react-bootstrap/Accordion';
import { Button, Card } from 'react-bootstrap';

class JournalList extends Component {
  state = {
    showModal: false,
    body: "",
    title: "",
    journalId: ""
  };

  toggleUpdate = () => {
    this.setState({
      showModal: true
    });
  };

  componentDidMount = () => {
    this.setState({
      body: this.props.body,
      title: this.props.title,
      journalId: this.props.id
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const date = this.props.posted_on.split("T")[0];
    return (
      <Card>
						<Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={this.props.id}>
                  {this.props.title}
                </Accordion.Toggle> 
               
                {this.props.currentUser.id === this.props.user_id 
                ? <div className="journalButtons pull-right">
                    <a>
                      <i
                        id="edit-icon"
                        class="far fa-edit fa-2x"
                        onClick={this.toggleUpdate}
                      ></i>
                    </a>
                    {this.state.showModal && (
                      <FormModal
                        button="Update"
                        body={this.state.body}
                        title={this.state.title}
                        journalId={this.state.journalId}
                        showModal={this.state.showModal}
                        closeModal={this.closeModal}
                      />
                    )}
                    <a><i id="delete-icon"
                        class="far fa-trash-alt fa-2x"
                        onClick={() =>
                          window.confirm("Are you sure you wish to delete this item?") &&
                          this.props.deleteJournal(this.props.id)
                        }></i></a>
                 </div>
                :  <h3 className="pull-right">{date}</h3> }
            
						</Card.Header>
						<Accordion.Collapse eventKey={this.props.id}>
						<Card.Body><p><pre>{this.props.body}</pre></p></Card.Body>
						</Accordion.Collapse>
			</Card>
    );
  }
}

export default JournalList;
