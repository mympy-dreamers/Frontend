import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const ProjectStoryDiv = styled.div`
	margin-bottom: 36px;
	.PS-title {
		background-color: #012345;
		color: white;
		height: 42px;
		font-size: 22px;
		padding: 10px 24px;
		margin-bottom: 6px;
	}

	.PS-body {
		background-color: white;
		padding: 28px 30px;

		.PS-story {
			font-size: 20px;
			line-height: 1.3;
		}
	}
`

class ProjectStory extends React.Component {
	render() {
		return (
			<ProjectStoryDiv>
				<h2 className="PS-title">Project Story</h2>
				<div className="PS-body">
					<p className="PS-story">{this.props.currDream.dream_long_description}</p>
				</div>
			</ProjectStoryDiv>
		);
	}
}

const mapStateToProps = ({ dreams }) => {
	return {
		currDream: dreams.currDream
	}
}

export default connect(mapStateToProps)(ProjectStory);