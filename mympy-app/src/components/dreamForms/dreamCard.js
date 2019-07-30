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
        
        </div>
)
}
}

export default DreamCard