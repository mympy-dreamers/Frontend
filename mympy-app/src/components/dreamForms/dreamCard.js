import React from 'react';
import './dreamCard.css';


class DreamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dreamCards: [],
            dreamCard: {}
        };
        this.handleChanges = this.handleChanges.bind(this);
        this.saveInfo = this.saveInfo.bind(this)
    }

    handleChanges = e => {
        console.log(this.state.dreamCard)
        const { name, value } = e.target
        const updatedCard = {...this.state.dreamCard}
        updatedCard[name] = value
        this.setState({ dreamCard: updatedCard })
    }

    saveInfo = e => {
        console.log(this.state.dreamCards)
        e.preventDefault()
        this.setState({
            dreamCards: [...this.state.dreamCards, this.state.dreamCard]
        })
    }

render() {
return (
    <div className='dream-Home-Page'> 
        <div className='dreamer-card-app'>

                <div className='form-title'>
                    <h1>Make your dream in reality!</h1>
                    <h2>My Dream</h2>
                </div>

        <div className='card-section'>
          <form onSubmit={this.props.saveInfo} className='dreamer-card'>
            <div className='inputs'>
                <div>
                    <p>Where you first had your Dream?</p>
                    <input className='input-style' placeholder='+' name='firstDream' value={this.state.firstDream} onChange={this.handleChanges}></input>
                </div>
                <div>
                    <p>What inspire you about your Dream?</p>
                    <input className='input-style' placeholder='+' name='inspiration' value={this.state.inspiration} onChange={this.handleChanges}></input>
                </div>
                <div>
                    <p>What you want to share to people about your Dream?</p>
                    <input id='dream-box' className='input-style' placeholder='+' name='aboutDream' value={this.state.aboutDream} onChange={this.handleChanges}></input>   
                </div>
                <div>
                    <p>How can your Dream impact people?</p>
                    <input className='input-style' placeholder='+' name='dreamImpact' value={this.state.dreamImpact} onChange={this.handleChanges}></input>   
                </div>
            </div> {/* inputs end */}

                <button  onClick={this.saveInfo}  type='submit' className='submit-button'>Next</button>

          </form> {/* dreamer-card end  */}
        </div> {/* card-section end */}
    </div>  {/* dreamer-card-app end  */}


    </div> /* dream-Home-Page end */

)
}
}

{/* <div></div> */}
export default DreamCard