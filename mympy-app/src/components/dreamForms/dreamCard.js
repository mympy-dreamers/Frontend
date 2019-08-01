import React from 'react';
import './dreamCard.css';


class DreamCard extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        dreamCards: {
        projectTitle: '',
        journal: '',
        aboutDream: '',
        inputText: ''
    }
};
}

handleChanges = e => {
    console.log(e.target.value)
const {name , value} = e.target
this.setState({ [name]: value})
}

saveInfo = e => { 
    e.preventDefault()
    const addInfo = {
        projectTitle: this.state.projectTitle,
        journal: this.state.journal,
        aboutDream: this.state.aboutDream,    
    }
}

render() {
return (
    <div className='dream-Home-Page'> 
        {/* <div>
              <img className='dream-Home-Img' src='http://localhost:3000/static/media/galaxyvr2x.0af499b3.png'></img>
        </div> */}
        <div className='dreamer-card-app'>

                <div className='form-title'>
                    <h1>Create a Dream</h1>
                </div>

        <div className='card-section'>

          <div>
              <img className='company-img' src='http://localhost:3000/static/media/galaxyvr2x.0af499b3.png'></img>
          </div>

          <form onSubmit={this.props.saveInfo} className='dreamer-card'>
                <div className='inputs'>

                <div>
                    <input className='input-style' placeholder='Journal Entry' value={this.state.projectTitle} onChange={this.handleChanges}></input>
                </div>
                <div>
                    <input className='input-style' placeholder='Project Story' value={this.state.journal} onChange={this.handleChanges}></input>
                </div>
                <div>
                    <input id='dream-box' className='input-style' placeholder='Add Story' value={this.state.aboutDream} onChange={this.handleChanges}></input>   
                </div>

                </div> {/* inputs end */}

            <button /* onClick={this.saveInfo} */ type='submit' className='submit-button'>Submit</button>

          </form> {/* dreamer-card end  */}

        </div> {/* card-section end */}

        </div>  {/* dreamer-card-app end  */}
    </div> /* dream-Home-Page end */
)
}
}

{/* <div></div> */}
export default DreamCard