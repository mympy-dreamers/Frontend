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
        inputText: ''
     }
    }
}

handleChanges = e => {
    console.log(e.target.value)
const {fullName , value} = e.target
this.setState({ [fullName]: value})
}

saveInfo = dreamer => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.dreamer)
}

render() {
return (
    <div className='dream-Home-Page'> 
        <div>
              <img className='dream-Home-Img' src='http://localhost:3000/static/media/galaxyvr2x.0af499b3.png'></img>
        </div>
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
                    <input className='input-style' placeholder='City' value={this.state.city} onChange={this.handleChanges}></input>
                </div>
                <div>
                    <input id='dream-box' className='input-style' placeholder='Dream' value={this.state.aboutDream} onChange={this.handleChanges}></input>   
                </div>

                </div> {/* inputs end */}

            <button onClick={this.saveInfo} type='submit' className='submit-button'>Submit</button>

          </form> {/* dreamer-card end  */}

        </div>  {/* dreamer-card-app end  */}
    </div> /* dream-Home-Page end */
)
}
}

{/* <div></div> */}
export default DreamCard