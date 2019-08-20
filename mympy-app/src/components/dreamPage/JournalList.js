import React, { Component } from 'react';
import { connect } from 'react-redux';

class JournalList extends Component {
  state = {
  }

  render() {
    return (
      <div className="journal-element">
        <h3>Posted on:</h3> {this.props.posted_on}
        <h3>Edited on:</h3> {this.props.edited_on}
        <h3>Title:</h3> {this.props.title}
        <h3>Body:</h3> {this.props.body}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dreams: state.dreams.userDreams,
    isupdating: state.dreams.isupdating,
    user: state.auth.user
  }
}


export default connect(
  mapStateToProps,
  {
  }
)(JournalList);
