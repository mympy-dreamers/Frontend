import React from 'react';
import './userDream.css';

class EditForm extends React.Component {
    state = {
        dream_name: '',
        dream_short_description: '',
        dream_long_description: '',
        donations_received: '',
        donation_goal: '',
        dreampic: '',
        user_id: this.props.currentUser.id

    }
    componentDidMount() {
        this.setState({
            dream_name: this.props.dream.dream_name,
            dream_short_description: this.props.dream.dream_short_description,
            dream_long_description: this.props.dream.dream_long_description,
            donations_received: this.props.dream.donations_received,
            donation_goal: this.props.dream.donation_goal,
            dreampic: this.props.dream.dreampic
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    update = (e) => {
        e.preventDefault();
        let newDream = {
            ...this.state,
            id: this.props.dream.id
        }
        this.props.updateDream(newDream);
        this.props.toggleUpdate();
    }

    delete = () => {
        this.props.deleteDream(this.props.dream.id)
        this.props.toggleUpdate();
    }

    render() {
        return (
            <div id="popup">
                <form className="popup_inner">
                    <h1>Title:</h1>
                    <input
                        className="textarea"
                        name='dream_name'
                        placeholder={this.props.dream.dream_name}
                        onChange={this.handleChange}
                        value={this.state.dream_name} />
                    <h1>Brief Summary:</h1>
                    <input
                        className="textarea"
                        name='dream_short_description'
                        placeholder={this.props.dream.dream_short_description}
                        onChange={this.handleChange}
                        value={this.state.dream_short_description} />
                    <h1>Dream Description:</h1>
                    <input
                        className="textarea"
                        name='dream_long_description'
                        placeholder={this.props.dream.dream_long_description}
                        onChange={this.handleChange}
                        value={this.state.dream_long_description} />
                    <h1>Donations Received:</h1>
                    <input
                        className="textarea"
                        name='donations_received'
                        placeholder={this.props.dream.donations_received}
                        onChange={this.handleChange}
                        value={this.state.donations_received} />    
                    <h1>Donation Goal:</h1>
                    <input
                        className="textarea"
                        name='donation_goal'
                        placeholder={this.props.dream.donation_goal}
                        onChange={this.handleChange}
                        value={this.state.donation_goal} />
                    {/* <h1>Image Upload Link:</h1>
                    <input
                        className="textarea"
                        name='dreampic'
                        placeholder={this.props.dream.dreampic}
                        onChange={this.handleChange}
                        value={this.state.dreampic} /> */}

                    <div className='edit-buttons'>
                        <button className='edit-button' onClick={this.update}>Update</button>
                        <button className='edit-button' onClick={this.delete}>Delete</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditForm;