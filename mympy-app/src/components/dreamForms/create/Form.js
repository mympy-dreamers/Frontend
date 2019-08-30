import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { addDream } from '../../../actions';
import { FormGroup, Label, Input, Alert } from 'reactstrap';
import InputModal from "../inputModal";

// Form was abstracted from a different component
//Input form for adding a dream
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            visible: false,
            // dreamCard holds all the proper information to pass into the PUT operation
            dreamCard: {
                dream_name: '',
                dream_short_description: '',
                dream_long_description: '',
                donations_received: 0,
                donation_goal: '',
                user_id: null,
            },
            showModal: false
        }
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    isFormValid = () => {
        const state = this.state.dreamCard;

        if (state.dream_name !== "" && Number.isInteger(Number(state.donation_goal)) && state.dream_long_description !== "" && state.dream_short_description !== "") {
            return this.handleSubmit()
        } else {
            return this.toggle()
        }
    }

    // controls form input data
    componentDidMount() {

        if (this.props.user) {
            this.setState({
                dreamCard: { ...this.state.dreamCard, user_id: this.props.user.id }
            })
        }
    }

    handleChanges = e => {

        e.preventDefault();

        this.setState({
            ...this.state,
            dreamCard: {
                ...this.state.dreamCard,
                [e.target.name]: e.target.value
            },
        })

    }


    handleFinalSubmit = e => {

        const newDream = { ...this.state.dreamCard, donation_goal: parseInt(this.state.dreamCard.donation_goal, 10) }

        this.props.addDream(newDream);

        this.setState({ showModal: false }, () => this.props.history.push('/addDream/image'));
    }

    // triggers modal toggle
    handleSubmit = e => {

        this.setState({
            showModal: true
        })

    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render(){
        return (

            <div className="form-main">

                <div className='formTitle'>

                    <h1>Tell me about yourself!</h1>
                    <p>(The process will take about 30 minutes to create.)</p>

                </div>

                <div className="form">

                    <FormGroup className="question">
                        <Label className="dreamLabel" for="exampleEmail">What is your name of the dream project?</Label>
                        <Input className="inputStyle one" onChange={this.handleChanges} name="dream_name" id="dream_name" placeholder="Step 1..." />
                    </FormGroup>

                    <FormGroup className="question">
                        <Label className="dreamLabel" for="examplePassword">What is your dreams donation goals?</Label>
                        <Input className="inputStyle two" onChange={this.handleChanges} name="donation_goal" id="donation_goal" placeholder="Step 2..." />
                    </FormGroup>

                    <FormGroup className="question">
                        <Label className="dreamLabel" for="exampleText">In one sentence, What is your dream project about?</Label>
                        <Input className="inputStyle three" onChange={this.handleChanges} type="textarea" name="dream_short_description" id="dreamShortDescription" placeholder="Step 3..." />
                    </FormGroup>

                    <FormGroup className="question">
                        <Label className="dreamLabel" for="exampleText">Describe, in detail, What is your dream project?</Label>
                        <Input className="inputStyle four" onChange={this.handleChanges} type="textarea" name="dream_long_description" id="dreamLongDescription" placeholder="Step 4..." />
                    </FormGroup>

                    <div className="btn-div">
                        <button className="rectangle-copy-2" onClick={() => <Link to="/dashboard" />}> Back</button>
                        <button className="rectangle-copy-3" onClick={this.isFormValid} >Finish</button>
                    </div>

                </div>

                <Alert className='alert0' color='danger' role='alert' isOpen={this.state.visible} toggle={this.toggle.bind(this)}>
                    <h1>Uh Oh!</h1>
                    <p>All field needs to be filled!</p>
                </Alert>
                {/* <button className="dreambutton" onClick={this.handleSubmit}>Submit</button> */}


                {<InputModal handleFinalSubmit={this.handleFinalSubmit} showModal={this.state.showModal} closeModal={this.closeModal} />}
            
            </div>

        )

    }
    
}

const mapStateToProps = ({ users, auth }) => {
    return {
        authZeroUser: users.authZeroUser,
        user: auth.user
    }
}

export default withRouter(connect(mapStateToProps, { addDream })(Form));