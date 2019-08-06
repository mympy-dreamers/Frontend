import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";



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
                    </div>

                    <div className='card-section'>
                        <form onSubmit={this.saveInfo} className='dreamer-card'>

                            <div className='inputs'>
                                <div>
                                    <p>Name of your Dream?</p>
                                    <input className='input-info' placeholder='' name='dreamName' value={this.state.dreamName} onChange={this.handleChanges}></input>
                                </div>
                                <div>
                                    <p>Enter your goal here</p>
                                    <input className='input-info' placeholder='$' name='amount' value={this.state.amount} onChange={this.handleChanges}></input>
                                </div>

                            </div> {/* inputs end */}

                            <div className='circle-Button'>
                                <div className='page-circles1'>  
                                    <div><i class="far fa-circle"></i></div>
                                    <div><i class="fas fa-circle"></i></div>    
                                    <div><i class="far fa-circle"></i></div>                  
                                </div>


                                <div>
                                    <button className='submit-button'>Back</button>
                                    <Link to={'/dreamer'}>
                                    <button className='submit-button'>Next</button>
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

export default DreamInfo