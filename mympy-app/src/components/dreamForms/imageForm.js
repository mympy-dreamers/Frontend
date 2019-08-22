import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addImage } from '../../actions';
import { Button, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import FormModal from "./FormModal";

class imageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSize: '',
            data: new FormData(),
            visible: false,
            img: {
                image: null,
            },
            showModal: false
        };
    }

    uploadFile = async e => {
        const files = e.target.files;
        this.state.data.append('dream_id', this.props.dreamId);
        this.state.data.append('image', files[0]);
        const size = files[0].size / 1000
        this.setState({
            imageSize: size
        }, () => this.props.addImage(this.state.data))
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.imageSize < 10000) {
            this.setState({
                showModal: true
            })
            setTimeout(() => {
                this.props.history.push(`/market/${this.props.dreamId}`)
            }, 2000)
        } else {
            this.toggle()
        }
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div className='dream-Home-Page'>
                <div className='dreamer-card-app'>
                    <div className='form-title'>
                        <h1>Make your dream in reality!</h1>
                    </div>

                    <div>
                        <FormGroup className='image-icons'>
                            <Label id="image-button" for="exampleFile"><i className="fas fa-folder-plus"><h2> Image File </h2></i></Label>
                            <div className='images'>
                                <Input className="fileInput" type="file" onChange={this.uploadFile} name="file" id="exampleFile" />
                                <button onClick={this.handleSubmit} className='dreambutton1'>Submit</button>
                            </div>

                        </FormGroup>
                        {/* <Button onClick={this.handleSubmit}>Submit</Button> */}
                    </div>

                    <Alert className='alert2' color='danger' role='alert' isOpen={this.state.visible} toggle={this.toggle.bind(this)}>
                        <h1>Uh Oh!</h1>
                        <p>Images need to be less then 10mb!</p>
                        <p>Your image is over 10 mb</p>
                    </Alert>
                    {this.state.showModal && <FormModal />}
                </div>  {/* dreamer-card-app end  */}
            </div> /* dream-Home-Page end */
        )
    }
}

const mapStateToProps = ({ dreams }) => {
    return {
        dreamId: dreams.dreamId,
        dreams: dreams.dreams
    }
}

export default connect(mapStateToProps, { addImage })(imageForm);