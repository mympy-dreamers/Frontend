import React from 'react';

class EditForm extends React.Component {
    state = {
        dream_name: '',
        dream_short_description: '',
        dream_long_description: '',
        donation_goal: '',
        dreampic: '',
        user_id: this.props.currentUser.subject
        
    }
    componentDidMount() {
            this.setState({
                dream_name: this.props.dream.dream_name,
                dream_short_description: this.props.dream.dream_short_description,
                dream_long_description: this.props.dream.dream_long_description,
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
            <form>
                <input 
                name='dream_name' 
                placeholder={ this.props.dream.dream_name } 
                onChange={ this.handleChange }
                value={ this.state.dream_name } />

                <input 
                name='dream_short_description' 
                placeholder={ this.props.dream.dream_short_description } 
                onChange={ this.handleChange }
                value={ this.state.dream_short_description } />

                <input 
                name='dream_long_description' 
                placeholder={ this.props.dream.dream_long_description } 
                onChange={ this.handleChange }
                value={ this.state.dream_long_description } />

                <input 
                name='donation_goal' 
                placeholder={ this.props.dream.donation_goal } 
                onChange={ this.handleChange }
                value={ this.state.donation_goal } />

                <input 
                name='dreampic' 
                placeholder={ this.props.dream.dreampic } 
                onChange={ this.handleChange }
                value={ this.state.dreampic } />

                <div>
                <button onClick={ this.update }>Update</button>
                <button onClick= { this.delete }>Delete</button>
                </div>
            </form>
        );
    }
}

export default EditForm;