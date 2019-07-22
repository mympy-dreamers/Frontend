import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            creds: {
                email: '',
                password: '',
            },
            signup: {
                email: '',
                username: '',
                password: '',
                confirm: '',
            }
        }
    }

    handleChanges = e => {
        this.setState({
            creds: {
                email: e.target.value,
            },
            signup: {
                [e.target.name]: e.target.value,
            }
        })
    }

    render(){
        return (
            <div className="login-main">
            {(this.props.type === 'login') ? (
                <div className="login">
                    <h3>LOG IN</h3>
                    <form>
                        <h4>Email</h4>
                        <input type="email" placeholder="Enter Email" value={this.state.creds.email} />
                        <h4>Password</h4>
                        <input type="password" placeholder="Enter Password" value={this.state.creds.password} />
                        <button>Next</button>
                    </form>
                </div>
            ) : (
                <div className="newUse-main">
                    <h3>SIGN UP</h3>
                    <form>
                        <h4>Email</h4>
                        <input onChange={this.handleChanges} placeholder="Enter Email" name="email" value={this.state.signup.email}/>
                        <h4>Username</h4>
                        <input onChange={this.handleChanges} placeholder="Enter Username" name="username" value={this.state.signup.username}/>
                        <h4>Password</h4>
                        <input onChange={this.handleChanges} placeholder="Enter Password" name="password" value={this.state.signup.password}/>
                        <h4>Confirm Password</h4>
                        <input onChange={this.handleChanges} placeholder="Confirm Your Password" name="confirm" value={this.state.signup.confirm}/>
                        <button>Submit</button>
                    </form>
                </div>
            )}
            </div>
        )
    }
}

export default Login;