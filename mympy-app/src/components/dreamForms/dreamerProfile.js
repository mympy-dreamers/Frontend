import React from "react";
import { connect } from "react-redux";
import { addDream } from "../../actions";
import { Button, FormGroup, Label, Input, Alert } from "reactstrap";
import InputModal from "./inputModal";

import "./dreamCard.css";

class DreamInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dreamCard: {
        dream_name: "",
        dream_short_description: "",
        dream_long_description: "",
        donations_received: 0,
        donation_goal: "",
        user_id: null
      },
      showModal: false
    };
  }

  toggle() {
    this.setState({
      visible: !this.state.visible
    });
  }

  isFormValid = () => {
    const state = this.state.dreamCard;

    if (
      state.dream_name !== "" &&
      Number.isInteger(Number(state.donation_goal)) &&
      state.dream_long_description !== "" &&
      state.dream_short_description !== ""
    ) {
      return this.handleSubmit();
    } else {
      return this.toggle();
    }
  };

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        dreamCard: { ...this.state.dreamCard, user_id: this.props.user.id }
      });
    } else {
      console.log("cannot find user id for forms page");
    }
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      dreamCard: {
        ...this.state.dreamCard,
        [e.target.name]: e.target.value
      }
    });
  };
  handleFinalSubmit = e => {
    const newDream = {
      ...this.state.dreamCard,
      donation_goal: parseInt(this.state.dreamCard.donation_goal, 10)
    };
    // e.preventDefault()
    this.props.addDream(newDream);
    this.setState({ showModal: false }, () => {
      this.props.history.push("/addDream/image");
    });
  };

  handleSubmit = e => {
    // e.preventDefault()
    this.setState({
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="dream-Home-Page">
        <div className="dreamer-card-app">
          <div className="form-title">
            <h1>Make your dream in reality!</h1>
          </div>
          <div>
            <FormGroup>
              <Label className="dreamlable" for="exampleEmail">
                Dream Name
              </Label>
              <Input
                className="input-style"
                onChange={this.handleChanges}
                name="dream_name"
                id="dream_name"
                placeholder="Enter your dream here"
              />
            </FormGroup>
            <FormGroup>
              <Label className="dreamlable" for="examplePassword">
                Donation Goals
              </Label>
              <Input
                className="input-style"
                onChange={this.handleChanges}
                name="donation_goal"
                id="donation_goal"
                placeholder="Enter Donation goal here"
              />
            </FormGroup>
            <FormGroup>
              <Label
                className="dreamlable"
                className="dreamlable"
                for="exampleText"
              >
                Summarize your dream in one sentence.
              </Label>
              <Input
                className="input-style"
                onChange={this.handleChanges}
                type="textarea"
                name="dream_short_description"
                id="dream_short_description"
              />
            </FormGroup>
            <FormGroup>
              <Label className="dreamlable" for="exampleText">
                Dream Story (Make it long!)
              </Label>
              <Input
                className="input-style"
                onChange={this.handleChanges}
                type="textarea"
                name="dream_long_description"
                id="dream_long_description"
              />
            </FormGroup>
            <Button onClick={this.isFormValid}>Submit</Button>
          </div>

          <Alert
            className="alert"
            color="danger"
            role="alert"
            isOpen={this.state.visible}
            toggle={this.toggle.bind(this)}
          >
            <h1>Uh Oh!</h1>
            <p>All field needs to be filled!</p>
          </Alert>

          {
            <InputModal
              handleFinalSubmit={this.handleFinalSubmit}
              showModal={this.state.showModal}
              closeModal={this.closeModal}
            />
          }
        </div>{" "}
      </div> 
    );
  }
}
const mapStateToProps = ({ users, auth }) => {
  return {
    authZeroUser: users.authZeroUser,
    user: auth.user
  };
};

export default connect(
  mapStateToProps,
  { addDream }
)(DreamInfo);
