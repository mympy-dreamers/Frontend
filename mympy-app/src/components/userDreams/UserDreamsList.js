import React, { Component } from 'react';
import { fetchUserDreams, updateDream, deleteDream } from '../../actions';
import { connect } from 'react-redux';
import UserDream from './UserDream';

class UserDreamsList extends Component {
  state = {
    isUpdating: false
  }

  componentDidMount() {
    this.props.fetchUserDreams(this.props.user.id);
  }

  render() {
    return (
      <div className="dream-container">
        <div className="dream-list">
          {this.props.dreams.map(dream =>
            <UserDream
              dream={dream}
              key={dream.id}
              deleteDream={this.props.deleteDream}
              updateDream={this.props.updateDream}
              currentUser={this.props.user} />)}
        </div>
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
    fetchUserDreams,
    updateDream,
    deleteDream
  }
)(UserDreamsList);
