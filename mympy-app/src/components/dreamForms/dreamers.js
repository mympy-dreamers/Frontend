import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";


class Dreamer extends React.Component {
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
        const updatedCard = { ...this.state.dreamCard }
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
                        <h2>Tell me about yourself!</h2>
                    </div>

                    <div className='card-section'>
                        <form onSubmit={this.props.saveInfo} className='dreamer-card'>
                            <div className='inputs'>
                                <div>
                                    <p>Tell me about where are you from?</p>
                                    <input className='input-style' placeholder='+' name='location' value={this.state.location} onChange={this.handleChanges}></input>
                                </div>
                                <div>
                                    <p>What do you want people to know about you?</p>
                                    <input className='input-style' placeholder='+' name='aboutYou' value={this.state.aboutYou} onChange={this.handleChanges}></input>
                                </div>
                                <div>
                                    <p>What are your goals now?</p>
                                    <input id='dream-box' className='input-style' placeholder='+' name='goals' value={this.state.goals} onChange={this.handleChanges}></input>
                                </div>
                                <div>
                                    <p>What other things you want people to now about you?</p>
                                    <input className='input-style' placeholder='+' name='extraInfo' value={this.state.extraInfo} onChange={this.handleChanges}></input>
                                </div>
                            </div> {/* inputs end */}

                            <div className='circle-Button'>
                                <div className='page-circles2'>  
                                    <div><i class="far fa-circle"></i></div>
                                    <div><i class="fas fa-circle"></i></div>    
                                    <div><i class="far fa-circle"></i></div>                  
                                </div>
                                
                                    <div>
                                        <Link to={'/dreamer'}>
                                            <button className='submit-button'>Back</button>
                                        </Link>  
                                        <Link to={'/'}>
                                            <button type='submit' className='submit-button'>Submit</button>
                                        </Link>  
                                    </div>
                                
                            </div> {/* circle-Button end */}

                        </form> {/* dreamer-card end  */}
                    </div> {/* card-section end */}
                </div>  {/* dreamer-card-app end  */}


            </div> /* dream-Home-Page end */

        )
    }
}

export default Dreamer