import React, { Component } from 'react';
import { connect } from 'react-redux';
import './journaList.css'

class JournalList extends Component {
  state = {
  }

  render() {
    return (
      <div className="journal-element">
        {/* <h3>Posted on:</h3> {this.props.posted_on}
        <h3>Edited on:</h3> {this.props.edited_on} */}
        <h1>{this.props.body}</h1> 
        <h2>{this.props.posted_on}</h2>
        <button 
          className="delete-button" 
          onClick={()=>
          window.confirm("Are you sure you wish to delete this item?") &&
          this.props.deleteJournal(this.props.id)}>Delete</button>
      </div>
    );
  }
}

export default JournalList;