import React from 'react';
import './dreamCard.css';


class DreamCard extends React.Component {
    constructor() {
    super();
  
    this.state = {
        // dreamCard: [],
        dreamCards: {
        fullName: '',
        city: '',
        aboutDream: '',
     }
    }
}

handleChanges = e => {
    console.log(this.handleChanges)
const {fullName , value} = e.target
this.setState({ [fullName]: value})
}
  
    render() {
    return (
        <div className='dreamer-card-app'>

          <div className='form-title'>
              <h1>Create a Dream</h1>
          </div>

          <form className='dreamer-card'>
            <div className='inputs'>

            <div>
              <input className='input-style' placeholder='Full Name' value={this.state.fullName} onChange={this.handleChanges}></input>
            </div>
            <div>
              <input className='input-style' placeholder='City' value={this.state.city} onchange={this.handleChanges} ></input>
            </div>
            <div>
              <input id='dream-box' className='input-style' placeholder='Dream' value={this.state.aboutDream}></input>   
            </div>

            </div> {/* inputs end */}
            <button className='submit-button'>Submit</button>
          </form> {/* dreamer-card end  */}

        </div>  /* dreamer-card-app end */
)
}
}

{/* <div></div> */}
export default DreamCard