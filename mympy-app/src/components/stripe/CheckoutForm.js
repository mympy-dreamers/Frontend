import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { dreamPayPost, userPayPost, updateDream } from '../../actions';
import { Alert } from 'reactstrap';

const StyledCheckoutForm = styled.div`
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
        margin-bottom: 30px;
        
        .donate-button {
            // width: 40%;
            margin: 0 auto;
            font-size: 2.4em;
            font-weight: bold;
            background: white;
            padding: 0.4em 0.8em;
            border: 2px solid black;
            border-radius: 6px;
            outline: none;
        }
    }


    .dev-warning {
        font-size: 0.8rem;
        color: red;
    }

    .alert {
        width: 100%;
        max-height: 2.6rem;
        font-size: 1rem;
    }
`

const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            success: false,
            fail: false
        }

        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        let { token } = await this.props.stripe.createToken({ name: this.props.authUser.name });  // name will be the customer's name passed in
        if (token) {
            let response = await fetch(`${BASE_URL}/stripe/charge`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    token: token.id,
                    amount: this.props.donationTotal
                })
            });

            if (response.ok) {
                console.log("Purchase Complete!");
                this.props.dreamPayPost({
                    "donation_amount": this.props.donationTotal,
                    "dream_id": this.props.currDream_id,
                    "img_url": this.props.authUser.picture,
                    "user_name": this.props.authUser.name
                });
                this.props.userPayPost({
                    "donation_amount": this.props.donationTotal,
                    "user_id": this.props.user_id
                });
                this.props.updateDream({
                    // ...this.props.currDream,
                    "id": this.props.currDream_id,
                    "donations_received": this.props.currDream.donations_received + this.props.donationTotal
                })
                this.setState({
                    complete: true,
                    success: true,
                    fail: false
                });
            } else {
                console.log("Forms not filled correctly");
                this.setState({
                    ...this.state,
                    fail: true,
                    success: false
                });
            }
        } else {
            console.log("Forms not filled correctly");
            this.setState({
                ...this.state,
                fail: true,
                success: false
            });
        }
    }

    render() {
        return (
            <StyledCheckoutForm className="checkout-main">
                <div className="stripe-form">
                    <p className="dev-warning" >Under development. Do not input real card information!</p>
                    <CardElement className='card-input' />
                    <div className='button-wrapper'>
                        <button className='donate-button' onClick={this.submit}>Donate ${this.props.donationTotal}</button>
                    </div>
                    {this.state.success && <Alert className="alert" color="success">
                        Purchase Complete!
                    </Alert>}

                    {this.state.fail && <Alert className="alert" color="danger">
                        Form not filled correctly
                    </Alert>}
                </div>
            </StyledCheckoutForm>
        )
    }
}

const mapStateToProps = ({ users, dreams, auth }) => {
    return {
        authUser: users.authZeroUser,
        currDream: dreams.currDream,
        currDream_id: dreams.currDream.id,
        user_id: auth.user.id
    }
}

export default connect(mapStateToProps, { dreamPayPost, userPayPost, updateDream })(injectStripe(CheckoutForm));