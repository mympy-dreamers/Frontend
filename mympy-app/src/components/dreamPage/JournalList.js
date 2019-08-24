import React, { Component } from 'react';
import { connect} from 'react-redux';
import './journaList.css'
import { addJournal } from '../../actions';
// import '../dreamPage/InputModal'





class JournalList extends Component {
  state = {
    isUpdating: false
  }


  toggleUpdate = () => {
    this.setState({ isUpdating: !this.state.isUpdating })
}

 
  

  render() {
    return (
    // <div className='journal-page'>
    //   <div className='journal-post'>
    //     <h1>Post</h1>
    //     <button>ADD NEW POST</button>
    //   </div>
      <div className="journal-element">
      
        {/* <h3>Posted on:</h3> {this.props.posted_on}
        <h3>Edited on:</h3> {this.props.edited_on} */}
        <div className='journalTitle'>

          <div className='titleStyle'>
          <h1>{this.props.title}</h1>
          </div>
          <div className='dateStyle'>
          <p>{this.props.posted_on}</p>
          </div>
            
        </div>
        <div className='journalButtons'>
        <a className="edit-button"><i id='edit-icon' class="far fa-edit"></i></a>
        <a id='delete-icon' className="delete-button" 
          onClick={()=>
          window.confirm("Are you sure you wish to delete this item?") &&
          this.props.deleteJournal(this.props.id)}><i class="far fa-minus-square"></i></a>
        </div>
      </div>
    // </div>
    );
  }
}

export default JournalList;