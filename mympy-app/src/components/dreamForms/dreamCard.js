import React from 'react';
import './dreamCard.css';


class DreamCard extends React.Component {
    constructor() {
    super();
  
    this.state = {
     postCard : {
        firstName: '',
        lastName: '',
        city: '',
        aboutDream: '',
        email: ''
     }
}
}
    render() {
    return (
        <div className='dreamer-card'>

          <div className='form-title'>
              <h1>Create a Dream</h1>
          </div>

          <form>
          <div className='inputs'>
              <input className='input-style' placeholder='First name'></input>
              <input className='input-style' placeholder='Last name'></input>
              <input className='input-style' placeholder='City'></input>
              <input className='input-style' placeholder='Dream'></input>
              <input className='input-style' placeholder='email'></input>
          </div>
          </form>
        </div>  /* dreamer-card end */
)
}
}

{/* <div></div> */}
export default DreamCard