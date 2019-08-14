import React from 'react';
import styled from 'styled-components';

import comingSoon from '../../img/coming-soon.png';

const JournalEntryDiv = styled.div`
	.JE-title {
		background-color: #012345;
		color: white;
		height: 42px;
		font-size: 22px;
		padding: 10px 24px;
		margin-bottom: 6px;
	}

	.JE-body {
		background-color: white;
		padding: 28px 30px;

		.JE-entry-title {
			font-size: 20px;
			font-weight: bold;
			margin-bottom: 6px;
		}

		.JE-entry {
			font-size: 20px;
			line-height: 1.3;
		}

		.read-more {
			font-weight: bold;
			font-size: 20px;
			text-align: right;
			margin-left: 38px;
		}

		.coming-soon {
			display: flex; 
			justify-content: center;
			img {
				width: 40%;
	   	 	filter: opacity(70%) invert(100%) ;
			}
		}
	}
`

const JournalEntry = ({ dream, user }) => {
	return (
		<JournalEntryDiv>
			<h2 className="JE-title">Journal Entry</h2>
			<div className="JE-body">
				{/*<h2 className="JE-entry-title">The Beging of Nomad</h2>
    		<p className="JE-entry">{dream.longDescription.slice(0, 500) + "..."}</p>
    		<div className="read-more">Read More</div>*/}
				<div className="coming-soon">
					<img src={comingSoon} alt='Coming Soon' />
				</div>
			</div>
		</JournalEntryDiv>
	);
}

export default JournalEntry;