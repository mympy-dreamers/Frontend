import React from 'react';
import { Elements } from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';

class Donate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            donationAmount: 0,
            mympyDonation: 0,
            donationTotal: 0
        }
    }

    render(){
        return(
            <div>
                <h1>Donate to</h1>
                <h1>Project {this.props.given_name +' '+ this.props.family_name}</h1>
                <div className='donation-amounts'>
                    <h2>$10</h2>
                    <h2>$15</h2>
                    <h2>$20</h2>
                    <h2>$25</h2>
                </div>
                <div className='custom-amount'>
                    <p>Custom Amount</p>
                    <input></input>
                </div>
                <div>
                    <div><img src=''/>{}</div>
                    <div>Help with Mympy's cost</div>
                </div>
                <button>total {this.state.donationTotal}</button>
                <Elements>
                    <CheckoutForm donationTotal={this.state.donationTotal}/>
                </Elements>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user.authZeroUser
  }
}

export default Donate;