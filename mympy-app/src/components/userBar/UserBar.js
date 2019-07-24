import React from 'react';

class UserBar extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div className="user-main">
                <div className="wrapper">
                    <h3>Hello User!</h3>
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

export default UserBar;