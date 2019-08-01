 import React from 'react';
 import dreamCard from '../dreamForms/dreamCard'

 const DreamerProfile = props => {
     return (
         <div className='dreamer-info'>
            <div>
            <h3>{props.fullName}</h3>
            <strong>{props.city}</strong>
            <p>{props.aboutDream}</p>
            </div>
         </div> /* dreamer-info end */
     )
 };

  DreamerProfile.defaultProps = {
    fullName: '',
    city: '',
    aboutDream: ''
  };

 export default DreamerProfile;