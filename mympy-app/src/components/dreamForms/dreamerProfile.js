import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {setDreamCards} from '../../actions';


class DreamInfo extends React.Component {
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
        e.preventDefault()
        console.log(this.state.dreamCard)
        const { name, value } = e.target
        const updatedCard = {...this.state.dreamCard}
        updatedCard[name] = value
        this.setState({ dreamCard: updatedCard })
    }

    saveInfo = e => {
        // console.log(this.state.dreamCards)
        const data = this.state
        console.log('this is your:', data)
        e.preventDefault();
        this.props.setDreamCards(this.state.dreamCard);

        
    }

    

    render() {
        return (
            <div className='dream-Home-Page'>
                <div className='dreamer-card-app'>

                    <div className='form-title'>
                        <h1>Make your dream in reality!</h1>
                    </div>

                    <div className='card-section'>
                        <form onSubmit={this.saveInfo} className='dreamer-card'>

                            <div className='inputs'>
                                <div>
                                    <p>Name of your Dream?</p>
                                    <input className='input-info' name='dream_name' value={this.state.dreamName} onChange={this.handleChanges}></input>
                                </div>
                                <div>
                                    <p>Enter your goal here</p>
                                    <input className='input-info' placeholder='$' name='donation_goal' value={this.state.amount} onChange={this.handleChanges}></input>
                                </div>

                            </div> {/* inputs end */}

                            <div className='circle-Button'>
                                <div className='page-circles1'> 
                                    <div><i class="fas fa-circle"></i></div>  
                                    <div><i className="far fa-circle"></i></div>   
                                    <div><i className="far fa-circle"></i></div>                  
                                </div>


                                <div>
                                    <Link to={'/dashboard'}>
                                    <button id='cancel' className='submit-button'>Cancel</button>
                                    </Link>
                                    <Link to={'/dreamerProfile'}>
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

export default connect(mapStateToProps, { setDreamCards })(DreamInfo);