import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import SignupContainer from '../session_form/signup_container';
import LoginContainer from '../session_form/login_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '200px'
  }
};

class SessionModal extends React.Component {
    constructor(props){
      super(props);

      this.state ={
        modalIsOpen: false,
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
   this.setState({modalIsOpen: false});
  }

  render(){
    let button;
    if (this.props.type === 'Sign In') {
      button = (<button className="button" id="sign-in" type="button"
        name="Sign In" onClick= {this.openModal}>Sign in</button>
    );
    } else if (this.props.type === "Sign Up") {
      button = (<button className="button" id="create-account" type="button"
        name="Create Account" onClick={this.openModal}>Create account</button>
      );
    } else {
      button = (
        <button className="button" id="sign-up" type="button"
          name="Sign Up" onClick={this.openModal}>Sign up for free</button>
      );
    }

      if (this.props.type === 'Sign In') {
        return(
          <div className="button-div">
            {button}
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
            <LoginContainer />
            </Modal>
          </div>
        );
      } else {
        return (
          <div className="button-div">
            {button}
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
            <SignupContainer />
            </Modal>
          </div>
        );
      }

  }
}

export default SessionModal;
