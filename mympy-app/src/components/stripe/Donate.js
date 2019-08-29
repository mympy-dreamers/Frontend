import React from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import styled from 'styled-components';

import mini_logo from '../../img/mympy-logo-mini.PNG'

const StyledDonate = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 8vh auto 8vh;
    padding: 1%;
    // border: 1px solid black;


    .title {
        align-self: baseline;
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
        margin-bottom: 18px;

        .button {
            width: 2.1em;
            height: 2.1em;
            background: white;
            font-weight: bold;
            border: 0.8px solid black;
            border-radius: 14%;
            outline: none;
            margin: 0;
            padding: 0;
            font-size: 3.3em;    
            font-weight: bold;
        }

        .active {
            border: 4px solid black;
        }
    }


    .custom-amount {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        margin-bottom: 3.2em;

        .custom-title {
            font-size: 26px;    
            font-weight: bold;    
        }

        .custom-input {
            width: 5.6em;
            height: 1.4em;
            font-size: 3em;
            text-align: right;
            padding-right: 8px;
            margin: 0;
            border: 1px solid black;
            border-radius: 6px;
            outline: none;

            &::-webkit-inner-spin-button {
                appearance: none;
            }
        }
    }

    .mympy-donation {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0.4em;

        img { height: 3.4em; }

        h3 { 
            font-size: 3em; 
            font-weight: bold; 
            margin-left: 0.4em;
            margin-right: 0.2em;
        }

    }

    .mympy-cost-msg {
        font-size: 2em; 
        text-align: right;
        margin-right: 0.3em;
        margin-bottom: 2em;
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
        let classes = e.target.className;
        e.target.className = (classes === 'button') ? classes+' active' : classes.replace(' active', '');
        this.setState({
            ...this.state,
            donationAmount: e.target.value,
            donationTotal: Number(this.state.donationTotal) + (
                e.target.className.includes('button active') ? 
                Number(e.target.value):
                Number(-e.target.value)
            ),
        })
    }

    customHandler = e => {
        let customAmount = e.target.value;
        this.setState({
            ...this.state,
            donationTotal: Number(customAmount) + Number(this.state.mympyDonation)
        })
    }

    render(){

        return(

            <StyledDonate>

                <h1 className='title'>Donate to</h1>
                <h1 className='title name'>Project {this.props.given_name +' '+ this.props.family_name}</h1>

                <div className='donation-buttons'>

                        {/* each buttton holds it own value that is passed when it is clicked */}

                    <button className='button' onClick={this.donationHandler} value={10}>$10</button>
                    <button className='button' onClick={this.donationHandler} value={15}>$15</button>
                    <button className='button' onClick={this.donationHandler} value={20}>$20</button>
                    <button className='button' onClick={this.donationHandler} value={25}>$25</button>

                </div>

                <div className='custom-amount'>

                    <h5 className='custom-title'>Custom Amount</h5>

                    <input className='custom-input' 
                        type='number' 
                        step="1" 
                        placeholder='$0'
                        onChange={this.customHandler}
                    />

                </div>

                <div>

                    <div className='mympy-donation'>

                        <img src={mini_logo} alt=""/>
                        <h3>{'$' + this.state.mympyDonation +'.00'}</h3>
                        
                    </div>

                    <div className='mympy-cost-msg'>Help with Mympy's cost</div>
                </div>

                <Elements>
                    <CheckoutForm donationTotal={this.state.donationTotal}/>
                </Elements>

            </StyledDonate>

        )

    }

}

export default Donate;