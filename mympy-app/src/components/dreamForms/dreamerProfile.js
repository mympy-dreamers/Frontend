import React from 'react';
import './dreamCard.css';


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
        const { name, value } = e.target
        const updatedCard = {...this.state.dreamCard}
        updatedCard[name] = value
        this.setState({ dreamCard: updatedCard })
    }

    saveInfo = e => {
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

                            <button type='submit' className='submit-button'>Next</button>

                        </form> {/* dreamer-card end  */}
                    </div> {/* card-section end */}
                </div>  {/* dreamer-card-app end  */}


            </div> /* dream-Home-Page end */

        )
    }
}

export default DreamInfo