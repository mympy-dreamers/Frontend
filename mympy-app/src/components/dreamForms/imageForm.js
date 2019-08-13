import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { addImage } from '../../actions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class imageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: {
                image: null
            }
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

    render() {
        return (
            <div className='dream-Home-Page'>
                <div className='dreamer-card-app'>
                    <div className='form-title'>
                        <h1>Make your dream in reality!</h1>
                    </div>
                    <div>
                    <FormGroup>
                        <div className='image-icons'>
                        <Label id="image-button" for="exampleFile"><i class="fas fa-folder-plus"><h2> Image File </h2></i></Label>
                        </div>
                        <div className="images">
                        <Input className="imagehandle fileInput" type="file" onChange={this.uploadFile} name="file" id="exampleFile"/>
                        {/* <Button className="dreambutton1">Submit</Button> */}
                        <button className='dreambutton1'>Submit</button>
                        </div>
                        {/* <FormText className="image-text" color="muted">
                            <p>This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.</p>
                        </FormText> */}
                    </FormGroup>
                    </div> 
                </div>  {/* dreamer-card-app end  */}
            </div> /* dream-Home-Page end */
        )
    }
}

const mapStateToProps = ({dreams}) =>{
    return {
        dreamId: dreams.dreamId
    }
}

export default connect(mapStateToProps, { addImage })(imageForm);