import React from 'react';
import './dreamCard.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addImage } from '../../actions';
import { Button, FormGroup, Label, Input, FormText , Alert } from 'reactstrap';



class imageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSize: '',
            visible: false,
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
        const size = this.getImageSizeInBytes(data.img_url) * 1000;
        console.log(data);
        this.setState({
            imageSize: size
         })
        console.log(this.props.dreamId);
        this.props.addImage(data);
    };

    testImage = e => {
        if(this.state.imageSize < 10) {
            console.log(this.state.imageSize)
            return this.props.history.push('/market')
        } else {
        this.toggle()
        }
    }

    testHandler = e => {
        console.log(this.state.imageSize)

    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        })   
   }  
getImageSizeInBytes = (imgURL) => {
    var request = new XMLHttpRequest();
    request.open('HEAD', imgURL, false);
    request.send(null);
    var headerText = request.getAllResponseHeaders();
    var re = /Content\-Length\s*:\s*(\d+)/i;
    re.exec(headerText);
    return parseInt(RegExp.$1);
 }



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
                        <Button onClick={this.testImage}>Submit</Button>
                    </div>

                            <Alert className='alert' color='danger' role='alert' isOpen={this.state.visible} toggle={this.toggle.bind(this)}>
                            <h1>Uh Oh!</h1>
                            <p>`Images need to be less then 10mb!`</p>
                            <p>'Your image is' + `${this.state.imageSize}`</p>
                            </Alert>

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