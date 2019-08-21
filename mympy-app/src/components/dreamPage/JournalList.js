import React, { Component } from 'react';
import { connect } from 'react-redux';

class JournalList extends Component {
  state = {
  }

  render() {
    return (
      <div className="journal-element">
        
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
