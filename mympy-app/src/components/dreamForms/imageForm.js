import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addImage } from '../../actions';
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';



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
                            <Label for="exampleFile">File</Label>
                            <Input type="file" onChange={this.uploadFile} name="file" id="exampleFile" />
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                        </FormText>
                        </FormGroup>
                        <Button><Link to='/market'>Submit</Link></Button>
                    </div>
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