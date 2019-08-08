import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {addDream} from '../../actions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



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
                user_id: 1,
            }
        };
        
    }

    handleChanges = e => {
        console.log(this.state.dreamCard)
        e.preventDefault()
        this.setState ({
            ...this.state,
            dreamCard: {...this.state.dreamCard, [e.target.name]: e.target.value}
            
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addDream(this.state)
    }


    

    render() {
        return (
            <div className='dream-Home-Page'>
                <div className='dreamer-card-app'>

                    <div className='form-title'>
                        <h1>Make your dream in reality!</h1>
                    </div>

                    <div>
                    <FormGroup>
                        <Label for="exampleEmail">Dream Name</Label>
                        <Input onChange={this.handleChanges} name="dream_name" id="dream_name" placeholder="Enter your dream here" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Donation Goals</Label>
                        <Input onChange={this.handleChanges}  name="donation_goal" id="donation_goal" placeholder="Enter Donation goal here" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Give us a short descrption</Label>
                        <Input onChange={this.handleChanges} type="textarea" name="dream_short_description" id="dream_short_description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Give us a long descrption</Label>
                        <Input onChange={this.handleChanges} type="textarea" name="dream_long_description" id="dream_long_description" />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                    </div> 
                </div>  {/* dreamer-card-app end  */}
            </div> /* dream-Home-Page end */

        )
    }
}

const mapStateToProps = ({dreams}) =>{
    return {
        //dreamCards: dreams.dreamCards
    }
}

export default connect(mapStateToProps, { addDream })(DreamInfo);