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

    donationHandler = e => {
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
        })
    }

    render(){
        return(
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