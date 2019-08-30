import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {setDreamCards} from '../../actions';

// user profile that is not used currently
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
                                    <input className='dreamform'id='dream_long_description' name='location' value={this.state.location} onChange={this.handleChanges}></input>
                                </div>
                                <div>
                                    <p>What do you want people to know about you?</p>
                                    <input className='input-style'id='dream_long_description' name='aboutYou' value={this.state.aboutYou} onChange={this.handleChanges}></input>
                                </div>
                                <div>
                                    <p>What are your goals now?</p>
                                    <input id='dream-box' className='input-style'id='dream_long_description' name='goals' value={this.state.goals} onChange={this.handleChanges}></input>
                                </div>
                                <div>
                                    <p>What other things you want people to now about you?</p>
                                    <input className='input-style'id='dream_long_description' name='extraInfo' value={this.state.extraInfo} onChange={this.handleChanges}></input>
                                </div>
                            </div> {/* inputs end */}

                            <div className='circle-Button'>
                                <div className='page-circles2'>   
                                    <div><i className="far fa-circle"></i></div>   
                                    <div><i class="fas fa-circle"></i></div> 
                                    <div><i className="far fa-circle"></i></div>                    
                                </div>
                                
                                    <div>
                                        <Link to={'/dreamerProfile'}>
                                            <button id='back1' className='submit-button'>Back</button>
                                        </Link>  
                                        <Link to={'/'}>
                                            <button type='submit' className='submit-button'>Next</button>
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

const mapStateToProps = ({dreams}) =>{
    return {
        //dreamCards: dreams.dreamCards
    }
}

export default connect(mapStateToProps, { setDreamCards })(Dreamer);