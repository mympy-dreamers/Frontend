import React from 'react';

class Login extends React.Component{
    state = {
        creds: {
            email: '',
        }
    }

    handleChanges = e => {
        this.setState({
            creds: {
                email: e.target.value,
            }
        })
    }

    render(){
        return (
            <div className="login-main">
                <div className="login">
                    <h3>LOG IN</h3>
                    <form>
                        <h4>Email</h4>
                        <input type="email" placeholder="Enter Email" />
                        <button>Next</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;