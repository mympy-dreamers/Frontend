import React from 'react';
import styled from 'styled-components';

import JournalEntry from './JournalEntry.js'
import ProjectStory from './ProjectStory.js'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const BodyDiv = styled.div`
	margin-top: 2px;
	width: 80%;
	margin: 0 auto;
`

const DreamPageBody = ({ dream }) => {

	return (
	  <BodyDiv>
		<Tabs defaultActiveKey="about" id="dream-page-body">
			<Tab eventKey="about" title="About">
				<ProjectStory dream={dream} />
			</Tab>
			<Tab eventKey="Journal" title="Journal" >
				<JournalEntry />
			</Tab>
		</Tabs>
	  </BodyDiv>
	);
}

export default DreamPageBody;