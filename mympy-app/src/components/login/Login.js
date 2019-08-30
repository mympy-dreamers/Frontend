import React from 'react';
import { connect } from 'react-redux';
import { login, register } from '../../actions/index';


// I believe Auth0 wiped this page out of the project and made it irrelevant

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cred: {
                username: '',
                password: ''
            },
            signup: {
                email: '',
                username: '',
                password: '',
            },
            confirm: '',
            match: true,
        }
    }

    handleLoginChanges = e => {
        this.setState({
            cred: {
                ...this.state.cred,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleConfirmChange = e => {
        this.setState({ confirm: e.target.value });
    }

    handleSignupChanges = e => {
        this.setState({
            signup: {
                ...this.state.signup,
                [e.target.name]: e.target.value,
            },
            match: null,
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.cred);
        this.setState({
            cred: {
                username: '',
                password: '',
            }
        });
        setTimeout(() => {   
                this.props.history.push('/dashboard')
        }, 650);
    }

    register = e => {
        e.preventDefault();
        this.props.register(this.state.signup);
        setTimeout(() => {   
            if(this.props.registerSuccess) {
                this.props.history.push('/login')
            }  
        }, 1000);
    }

    render(){

        return (

            <div className="login-main">
        {/* Ternary Statement used to determine if the user was logging in or registering to follow DRY and use one component */}
                {(this.props.type === 'login') ? (

                    <div className="login">

                        <h3>LOG IN</h3>

                        <form onSubmit={this.login}>

                            <h4>Username</h4>
                            <input onChange={this.handleLoginChanges} name="username" type="text" placeholder="Enter Username" value={this.state.cred.username} />
                            
                            <h4>Password</h4>
                            <input onChange={this.handleLoginChanges} name="password" type="password" placeholder="Enter Password" value={this.state.cred.password} />
                            
                            <button>Next</button>

                        </form>

                    </div>

                ) : (

                    <div className="newUse-main">

                        <h3>SIGN UP</h3>

                        <form onSubmit={this.register}>

                            <h4>Email</h4>
                            <input onChange={this.handleSignupChanges} placeholder="Enter Email" name="email" value={this.state.signup.email}/>
                            
                            <h4>Username</h4>
                            <input onChange={this.handleSignupChanges} placeholder="Enter Username" name="username" value={this.state.signup.username}/>
                            
                            <h4>Password</h4>
                            <input onChange={this.handleSignupChanges} placeholder="Enter Password" type="password" name="password" value={this.state.signup.password}/>
                            
                            <h4>Confirm Password</h4>
                            <input onChange={this.handleConfirmChange} placeholder="Confirm Your Password" type="password" name="confirm" value={this.state.confirm}/>
                            
                            <button>Submit</button>

                        </form>

                    </div>

                )}

            </div>

        )

    }

}

const mapStateToProps = state => {
    return state.auth
}

export default connect(mapStateToProps, { login, register })(Login);