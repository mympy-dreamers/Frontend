import React from 'react';
import { Elements } from 'react-stripe-elements';

import CheckoutForm from './CheckoutForm';

class Donate extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Donate here!</h1>
                <Elements>
                    <CheckoutForm />
                </Elements>
            </div>
        )
    }
}

export default Donate;