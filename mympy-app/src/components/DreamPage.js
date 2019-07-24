import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../scss/dreamPage.scss';

class DreamPage extends React.Component {
  constructor() {
  	super();

  	this.state = {
  		dream: {},
  		user:{}
  	};
  }

  componentDidMount() {
  	const thisDream = this.props.dreams.find( dream => 
  		(parseInt(dream.id) === parseInt(this.props.match.params.id)) 
  	)
  	
  	this.setState({
  		dream: thisDream,
  		user: thisDream.user
  	})
  }

  render() {
    return (
      <div className="dream-page">
      	{this.state.dream.title}
      </div>
    );
  }
}

const mapStateToProps = ({ dreams }) => ({
	dreams
});

export default connect(mapStateToProps)(DreamPage);