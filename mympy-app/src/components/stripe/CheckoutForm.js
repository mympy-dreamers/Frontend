import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledCheckoutForm = styled.div`
    // width: 90%;
    // align-self: center;
    display: flex;
    flex-direction: column;

    .card-input {
        align-self: stretch;
        margin: 0 auto;
        width: 100%
        font-size: 2em;
        padding: 0.4em;
        border: 1px solid black;
        border-radius: 2px;
        margin-bottom: 2em;
    }
    
    .button-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .donate {
        // width: 40%;
        margin: 0 auto;
        font-size: 2.4em;
        font-weight: bold;
        background: white;
        padding: 0.4em 0.8em;
        border: 2px solid black;
        border-radius: 6px;
    }
`

const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
        }
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        let { token } = await this.props.stripe.createToken({name: 'name'});  // name will be the customer's name passed in
        let response = await fetch(`${BASE_URL}/stripe/charge`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                token: token.id,
                amount: this.props.donationTotal
            })
        });

        if (response.ok) {
            this.setState({complete: true});
            alert("Purchase Complete!");
        } else {
            alert("Forms not filled correctly");
        }
    }

    render() {
        return (
            <StyledCheckoutForm className="checkout-main">
                <div className="stripe-form">
                    <CardElement className='card-input' />
                    <div className='button-wrapper'>
                        <button className='donate' onClick={this.submit}>Donate ${this.props.donationTotal}</button>
                    </div>
                </div>
            </StyledCheckoutForm>
        )
    }
}

export default injectStripe(CheckoutForm);