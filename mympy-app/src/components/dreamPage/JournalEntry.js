import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import JournalList from './JournalList';
import { 
	fetchDreamJournals, 
	deleteJournal, 
	updateJournal } from '../../actions'
import './journaList.css';
import Accordion from 'react-bootstrap/Accordion';
import JournalForm from "../dreamPage/JournalForm";

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
        filter: opacity(70%) invert(100%);
      }
    }
  }
`;
const journalPost = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  borderBottom: "1px solid darkgrey",
  padding: "15px 0"
};

const journalPostButton = {
  height: "36px",
  width: "124px",
  borderRadius: "5rem",
  border: "1px solid #DBD82C",
  color: "gray",
  marginRight: "15px",
  fontSize: "12px"
};

const journalPostH1 = {
  marginTop: "8px",
  marginLeft: "1rem",
  fontSize: "1rem",
  fontWeight: "bolder"
};

//JournalEntry component
class JournalEntry extends Component {
	state = {
		showModal: false
	};

	//Fetches journal content by dream id
	componentDidMount() {
		setTimeout(() =>
			this.props.fetchDreamJournals(this.props.currDream.id), 1000
		);
	}

	componentDidUpdate(prevProps){
		if(prevProps.journals.length !== this.props.journals.length)
			this.props.fetchDreamJournals(this.props.currDream.id)
	}
  
	handleSubmit = () => {
		this.setState({
		  showModal: true
		});
	};
	
	closeModal = () => {
		this.setState({ showModal: false });
	};

render() {
	return (
		<JournalEntryDiv>
			<h2 className="JE-title">Journal Entries</h2>

		<div className='journal-page'>
			<div style={journalPost} className="journal-post">
				<h1 style={journalPostH1}>Recent Posts</h1>
				{this.props.currDream.user_id === this.props.user.id 
				? <button style={journalPostButton} onClick={this.handleSubmit}>
				ADD NEW POST
				</button>
				: null}
				{this.state.showModal && (
				<JournalForm
					button="Submit"
					showModal={this.state.showModal}
					closeModal={this.closeModal}
				/>
				)}
			</div>

			<div className="JE-body">
				<Accordion>
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
						user_id={journal.user_id}
						deleteJournal={this.props.deleteJournal} />
					)}
				</Accordion>
			</div>
		</div>
		</JournalEntryDiv>
		)
	}
}	//End of JournalEntry

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    journals: state.journals.dreamJournals,
    currDream: state.dreams.currDream,
    isupdating: state.journals.isupdating
  };
}

export default connect(
  mapStateToProps,
  {
    fetchDreamJournals,
    deleteJournal,
    updateJournal
  }
)(JournalEntry);
