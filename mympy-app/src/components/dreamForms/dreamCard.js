import React from 'react';
import './dreamCard.css';


class DreamCard extends React.Component {
    constructor() {
    super();
  
    this.state = {
     postCard : {
        name: '',
        email: '',
        aboutDream: ''
     }
}
}
    render() {
    return (
        <div className='dreamer-card'>
        <div>
            
        </div>
          <div>
           <form>
               <input placeholder='Full Name'></input>
               <input placeholder='About Dream'></input>
           </form>
          </div>
        </div>
)
}
}

export default DreamCard