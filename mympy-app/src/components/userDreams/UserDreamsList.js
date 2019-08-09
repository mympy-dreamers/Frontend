import React, { Component } from 'react';
import { fetchUserDreams, updateDream, deleteDream } from '../../actions';
import { connect } from 'react-redux';
import UserDream from './UserDream';

class UserDreamsList extends Component {
  state = {
  }

  componentDidMount() {
    this.props.fetchUserDreams(this.props.currentUser.subject);
  }

  render() {
    return (
      <div className="dream-container">
        <h1>{ this.props.currentUser.username }'s Current Dreams</h1>
        <div className="dream-list">
        {this.props.dreams.map(dream => 
          <UserDream 
          dream={ dream } 
          key={ dream.id }
          deleteDream={ this.props.deleteDream } 
          updateDream={ this.props.updateDream }
          currentUser={ this.props.currentUser } />)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dreams: state.dreams.userDreams,
    isupdating: state.dreams.isupdating,
    currentUser: state.auth.currentUser
  }
}


export default connect(
  mapStateToProps,
  {
    fetchUserDreams,
    updateDream,
    deleteDream
  }
)(UserDreamsList);
