import React from 'react';
import { NavLink } from "react-router-dom";
import { Route } from 'react-router-dom';

import './tabs.scss';
import StoryTab from './StoryTab';
import JournalTab from './JournalTab';

class Tabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			toggle: false,
			storyContentClass: "story-content",
			journalContentClass: "journal-content hide"
		}
	}

	componentDidMount() {

	}

	toggleClass = () => {
		this.state.storyContentClass.includes("hide") ?
		this.setState({
			storyContentClass: this.state.storyContentClass.replace("hide", ""),
			journalContentClass: this.state.journalContentClass + " hide"
		}) :
		this.setState({
			storyContentClass: this.state.storyContentClass + " hide",
			journalContentClass: this.state.journalContentClass.replace("hide", "")
		})
	}

	render() {
		return (
			<div className="tabs-component">
				<nav className="tabs-container">
					<NavLink className="story-tab tab" to={`/market/${this.props.dream.id}`} >PROJECT STORY</NavLink>
					<NavLink className= "journal-tab tab" to={`/market/${this.props.dream.id}/journal`}>JOURNAL</NavLink>
				</nav>

				<Route
					exact
					path="/market/:id"
					render={props => <StoryTab {...props} dream={this.props.dream} user={this.props.user} allUserDreams={this.props.allUserDreams} />}
				/>
				<Route
					path="/market/:id/journal"
					render={props => <JournalTab {...props} />}
				/>
	   	</div>
		)
	}
}

export default Tabs;