import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import styled from 'styled-components';

const StyledCheckoutForm = styled.div`
`

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
        }
        this.submit = this.submit.bind(this);
    }

    async submit() {
        let { token } = await this.props.stripe.createToken({name: 'name'});
        let response = await fetch("http://localhost:5000/stripe/charge", {
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
                    <p>Would you like to donate?</p>
                    <CardElement />
                    <button onClick={this.submit}>Donate</button>
                </div>
            </StyledCheckoutForm>
        )
    }
}

export default injectStripe(CheckoutForm);