import React from 'react';
import styled from 'styled-components';

import JournalEntry from './JournalEntry.js'
import ProjectStory from './ProjectStory.js'

const BodyDiv = styled.div`
	margin-top: 2px;
	width: 60%;
	margin: 0 auto;
`

const DreamPageBody = ({ dream }) => {

	return (
	  <BodyDiv>
	  	<ProjectStory dream={dream} />
	  	<JournalEntry dream={dream} />
	  </BodyDiv>
	);
}

export default DreamPageBody;