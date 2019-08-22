import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Button, Card } from 'react-bootstrap';
class JournalList extends Component {
  state = {
  }

  render() {
    return (
      <Card>
						<Card.Header>
						<Accordion.Toggle as={Button} variant="link" eventKey={this.props.id}>
							{this.props.title}
						</Accordion.Toggle> 
            <div className="pull-right">
              {this.props.posted_on}
              <button 
              className="delete-button" 
              onClick={()=>
              window.confirm("Are you sure you wish to delete this item?") &&
              this.props.deleteJournal(this.props.id)}>Delete
            </button>
            </div>
						</Card.Header>
						<Accordion.Collapse eventKey={this.props.id}>
						<Card.Body>{this.props.body}</Card.Body>
						</Accordion.Collapse>
			</Card>
    );
  }
}

export default JournalList;