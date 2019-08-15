import React from 'react';
import { connect } from "react-redux";
import { addDream } from '../../actions';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import './dreamCard.css';

class DreamInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dreamCard: {
                dream_name: '',
                dream_short_description: '',
                dream_long_description: '',
                donations_received: 0,
                donation_goal: 0,
                user_id: null,
                
            }
        };
    }

    componentDidMount() {
        if (this.props.user) {
            this.setState({
                dreamCard: { ...this.state.dreamCard, user_id: this.props.user.id }
            })
        } else {
            console.log('cannot find user id for forms page')
        }
    }

    handleChanges = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            dreamCard: {
                ...this.state.dreamCard,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        const newDream = { ...this.state.dreamCard, donation_goal: parseInt(this.state.dreamCard.donation_goal, 10) }
        e.preventDefault()
        console.log('submittedDream: ', newDream);
        this.props.addDream(newDream)
            .then(() => this.props.history.push('/addDream/image'));
           
           
    }

    render() {
        console.log(this.state)
        return (
            <div className='dream-Home-Page'>
                <div className='dreamer-card-app'>
                    <div className='form-title'>
                        <h1>Make your dream in reality!</h1>
                    </div>
                    <div>
                        <FormGroup>
                            <Label className="dreamlable" for="exampleEmail">Dream Name</Label>
                            <Input className="input-style" onChange={this.handleChanges} name="dream_name" id="dream_name" placeholder="Enter your dream here" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="dreamlable"  for="examplePassword">Donation Goals</Label>
                            <Input className="input-style" onChange={this.handleChanges} name="donation_goal" id="donation_goal" placeholder="Enter Donation goal here" />
                        </FormGroup>
                        <FormGroup>
                            <Label  className="dreamlable"  className="dreamlable" for="exampleText">Give us a short descrption</Label>
                            <Input className="input-style"  onChange={this.handleChanges} type="textarea" name="dream_short_description" id="dream_short_description" />
                        </FormGroup>
                        <FormGroup>
                            <Label  className="dreamlable" for="exampleText">Give us a long descrption</Label>
                            <Input  className="input-style" onChange={this.handleChanges} type="textarea" name="dream_long_description" id="dream_long_description" />
                        </FormGroup>
                        <Button   onClick={this.handleSubmit}>Submit</Button>

                    </div>
                    
                </div>  {/* dreamer-card-app end  */}
               
            </div> /* dream-Home-Page end */
        )
    }
}
const mapStateToProps = ({ users, auth }) => {
    return {
        authZeroUser: users.authZeroUser,
        user: auth.user
    }
}

export default connect(mapStateToProps, { addDream })(DreamInfo);