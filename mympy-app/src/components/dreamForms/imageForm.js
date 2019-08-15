import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addImage } from '../../actions';
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import SubmitModal from "./formModel";
class imageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: {
                image: null,
            },
            showModal:false
            
        };
    }

    uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        console.log(files, 'files');
        data.append('dream_id', this.props.dreamId);
        data.append('image', files[0]);
        console.log(data);
        console.log(this.props.dreamId);
        this.props.addImage(data);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            showModal:true
        })
        setTimeout(()=> {
            this.props.history.push(`/market`)
        }, 2000)
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
                            <Label id="image-button" for="exampleFile"><i class="fas fa-folder-plus"><h2> Image File </h2></i></Label>
                            <div className='images'>
                                <Input className="fileInput" type="file" onChange={this.uploadFile} name="file" id="exampleFile" />
                            </div>
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </div>
                   {this.state.showModal && <SubmitModal/>}
                </div>  {/* dreamer-card-app end  */}
            </div> /* dream-Home-Page end */
        )
    }
}

const mapStateToProps = ({ dreams }) => {
    return {
        dreamId: dreams.dreamId
    }
}

export default connect(mapStateToProps, { addImage })(imageForm);