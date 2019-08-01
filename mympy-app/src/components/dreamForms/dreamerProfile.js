import React from 'react';
import './dreamCard.css';


class DreamInfo extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        dreamName: '',
        amount: '',
        // firstDream: '',
        // inspiration: '',
        // aboutDream: '',
        // dreamImpact: '',
        // location: '',
        // aboutYou: '',
        // goals: '',
        // extraInfo: '',


};
}

handleChanges = e => {
    console.log(this.state)
const {name , value} = e.target
this.setState({ [name]: value})
}

saveInfo = e => { 
    e.preventDefault()
    console.log(this.state)
}

render() {
return (
    <div className='dream-Home-Page'> 
        <div className='dreamer-card-app'>

                <div className='form-title'>
                    <h1>Make your dream in reality!</h1>
                </div>

        <div className='card-section'>
          <form onSubmit={this.props.saveInfo} className='dreamer-card'>
            <div className='inputs'>
                <div>
                    <p>Name of your Dream?</p>
                    <input className='input-info' placeholder='' name='firstDream' value={this.state.projectTitle} onChange={this.handleChanges}></input>
                </div>
                <div>
                    <p>Enter your goal here</p>
                    <input className='input-info' placeholder='$' name='inspiration' value={this.state.journal} onChange={this.handleChanges}></input>
                </div>
                
            </div> {/* inputs end */}

                <button /* onClick={this.saveInfo} */ type='submit' className='submit-button'>Next</button>

          </form> {/* dreamer-card end  */}
        </div> {/* card-section end */}
    </div>  {/* dreamer-card-app end  */}


    </div> /* dream-Home-Page end */

)
}
}

{/* <div></div> */}
export default DreamInfo