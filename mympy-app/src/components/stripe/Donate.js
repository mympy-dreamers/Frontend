import React from 'react';
import { Elements } from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';
import styled from 'styled-components';

const StyledDonate = styled.div`
    max-width: 400px;
    margin: 0 auto;
    margin-top: 8vh;
    padding: 1%;
    border: 1px solid black;

    .title {
        background: black;
        color: white; 
        font-size: 24px;
        padding: 4px 10px;
        margin-bottom: 0.4em;
    }

    .name {
        color: yellow;
        margin-bottom: 1em;

    }

    .donation-buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

    }

    .button {
        width: 7em;
        height: 7em;
        background: white;
        font-weight: bold;
        border: 0.6px solid black;
        border-radius: 14%;
        outline: none;
        margin: 0;
        padding: 0;

        h4  {
            font-size: 3.3em;    
            font-weight: bold;
        }
    }

    .active {
        border: 4px solid black;
    }

    .custom-amount {
        display: flex;
        justify-content: space-between;
        margin: 0;
        margin-bottom: 20px;

        .custom-title {
            font-size: 26px;    
            font-weight: bold;    
        }

        .input {
            height: 4em;
            border: 1px solid black;
            border-radius: 6px;
        }
    }
`

class Donate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            donationAmount: 0,
            mympyDonation: 3,
            donationTotal: 3
        }
    }

    donationHandler = e => {
<<<<<<< HEAD
        let classes = e.target.className;
        e.target.className = classes.includes('active') ? classes.replace(' active', '') : classes+' active';
        this.setState({
            ...this.state,
            donationAmount: e.target.value,
            donationTotal: Number(this.state.donationTotal) + (
                e.target.className.includes('active') ? 
                Number(e.target.value):
                Number(-e.target.value)
            ),
=======
        console.log(e.target.value);
        this.setState({
            ...this.state,
            donationAmount: e.target.value,
            donationTotal: Number(this.state.donationTotal) + Number(e.target.value),
        })
    }

    customHandler = e => {
        this.setState({
            ...this.state,
            mympyDonation: e.target.value,
            donationTotal: Number(this.state.donationTotal) + Number(e.target.value),
>>>>>>> 93275426b5aa601ee6206fa319b131c6ff817c3d
        })
    }

    render(){
        return(
<<<<<<< HEAD
            <StyledDonate>
                <h1 className='title'>Donate to</h1>
                <h1 className='title name'>Project {this.props.given_name +' '+ this.props.family_name}</h1>
                <div className='donation-buttons'>
                    <button className='button' onClick={this.donationHandler} value={10}><h4>$10</h4></button>
                    <button className='button' onClick={this.donationHandler} value={15}><h4>$15</h4></button>
                    <button className='button' onClick={this.donationHandler} value={20}><h4>$20</h4></button>
                    <button className='button' onClick={this.donationHandler} value={25}><h4>$25</h4></button>
                </div>
                <div className='custom-amount'>
                    <h5 className='custom-title'>Custom Amount</h5>
                    <input className='input' placeholder='$0.00'></input>
                </div>
                <div>
                    <div><img src=''/>{this.state.mympyDonation}</div>
=======
            <div>
                <h1>Donate to</h1>
                <h1>Project {this.props.given_name +' '+ this.props.family_name}</h1>
                <div className='donation-amounts'>
                    <button onClick={this.donationHandler} value={10}>$10</button> {/* value is in cents */}
                    <button onClick={this.donationHandler} value={15}>$15</button>
                    <button onClick={this.donationHandler} value={20}>$20</button>
                    <button onClick={this.donationHandler} value={25}>$25</button>
                </div>
                <div className='custom-amount'>
                    <p>Custom Amount</p>
                    <input onChange={this.customHandler} value={this.state.mympyDonation} />
                </div>
                <div>
                    <div><img src='#' alt='' />{}</div>
>>>>>>> 93275426b5aa601ee6206fa319b131c6ff817c3d
                    <div>Help with Mympy's cost</div>
                </div>
                <button>total {this.state.donationTotal}</button>
                <Elements>
                    <CheckoutForm donationTotal={this.state.donationTotal}/>
                </Elements>
            </StyledDonate>
        )
    }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user.authZeroUser
  }
}

export default Donate;