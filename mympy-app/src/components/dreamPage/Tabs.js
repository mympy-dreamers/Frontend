import React from 'react';
import { Route, NavLink } from "react-router-dom";

import './tabs.scss';

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
				<div className="tabs-container">
					<NavLink className="story-tab tab" onClick={() => this.toggleClass()} to={`/market/${this.props.dream.id}/project_story`} >PROJECT STORY</NavLink>
					<NavLink className= "journal-tab tab" onClick={() => this.toggleClass()} to={`/market/${this.props.dream.id}/journal`}>JOURNAL</NavLink>
				</div>

				<div className={this.state.storyContentClass}>
					{/*Left side of Project Story tab*/}
					<div className="story">
						<h1 className="dream-title">{this.props.dream.title}</h1>
						<p className="dream-description">{this.props.dream.longDescription}</p>
					</div>

					{/*Right side of Project Story tab*/}
					<div className="user-section">
						<div className="user-profile">
							<img className="user-pic"  />
							<h2 className="pic-footer">MY STORY</h2>
						</div>

						<h2 className="user-name">{this.props.user.firstname + " " + this.props.user.lastname}</h2>
						<h3 className="city">{this.props.user.city}</h3>

						<button className="donate-button">Donate Now</button>
						<h5 className="more-from">More Dreams by {this.props.user.firstname}</h5>
						{this.props.allUserDreams.map( dream => {
							return <img className="dream-pic" key={dream.id}/>
						})}
					</div>
				</div>

				<div className={this.state.journalContentClass}>
				</div>
	   	</div>
		)
	}
}

export default Tabs;