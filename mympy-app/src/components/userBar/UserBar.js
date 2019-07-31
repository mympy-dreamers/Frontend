import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import { fetchAllDreams } from '../../actions';



// used to decode the token for the username

const token = localStorage.getItem('token');

// End of token decoding
class UserBar extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
        }
        
    }

    componentDidMount(){
        this.props.fetchAllDreams();
    }

    isReady = () => {
        const name = localStorage.getItem('username');
        if(name === null){
            return(
                <Spinner size="sm" color="secondary" />
            )
        } else {
            return (
                <h3>Hello {name.toUpperCase()}!</h3>
            )
        }
    }

    // method for decoding a token

    decodeToken = token => {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken;
    }

    render() {
        return(
            <div className="user-main">
                <div className="wrapper">
                    {this.isReady()}
                    <div className="flexing">
                        <p>img here</p>
                        <p>create dream</p>
                        <p>edit dreams</p>
                        <p>journal</p>
                        <p>messages</p>
                        <p>edit bio</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { fetchAllDreams })(UserBar);