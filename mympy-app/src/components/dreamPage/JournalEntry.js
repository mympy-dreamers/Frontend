import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import JournalList from './JournalList';
import comingSoon from '../../img/coming-soon.png';
import { fetchDreamJournals, deleteJournal } from '../../actions'
import './journaList.css'
import FormModal from "../dreamPage/JournalForm";



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

class JournalEntry extends Component {
	state = {
		showModal: false
	}
  
	componentDidMount() {
		setTimeout(() =>this.props.fetchDreamJournals(this.props.currDream.id), 1000);
	}

	handleSubmit = () => {
	this.setState({
				showModal: true
		})
	}


render() {
	return (
		
		<JournalEntryDiv>
			<h2 className="JE-title">Journal Entry</h2>

		<div className='journal-page'>
      				<div className='journal-post'>
        				<h1>Post</h1>
        				<button onClick={this.handleSubmit}>ADD NEW POST</button>
						{this.state.showModal && <FormModal/>}
      				</div>

					  {/* <div className='bg-modal'>
							<div className='modal-content '>
								<img className='journal-img' src='https://truelifediva.files.wordpress.com/2014/02/journal-cartoon.jpg' alt='journal book'></img>

								<form>
									<input type='text' placeholder='Journal Title'></input>
									<input type='text' placeholder='Add Journal'></input>
								</form>
							</div>
					  </div> */}

			<div className="JE-body">
					{this.props.journals.map(journal =>
						<JournalList
						dream={this.props.dream}
						key={journal.id}
						id={journal.id}
						title={journal.title}
						body={journal.body}
						posted_on={journal.created_at}
						edited_on={journal.updated_at}
						currentUser={this.props.user}
						deleteJournal={this.props.deleteJournal} />
					)}
				{/* <div className="coming-soon">
					<img src={comingSoon} alt='Coming Soon' />
				</div> */}
			</div>
		</div>
		</JournalEntryDiv>
		)
	}
}	

function mapStateToProps(state) {
	return {
	  user: state.auth.user,
	  journals: state.journals.dreamJournals,
	  currDream: state.dreams.currDream
	}
  }
  
  
  export default connect(
	mapStateToProps,
	{	
		fetchDreamJournals,
		deleteJournal
	}
  )(JournalEntry);
  