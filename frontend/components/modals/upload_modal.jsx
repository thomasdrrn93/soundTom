import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import UploadContainer from '../upload/upload_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height                : '400px',
    display               : 'inline-block'
  }
};

class UploadModal extends React.Component {
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
    return(
      <div>
        <a onClick={this.openModal} className='nav-links'>
          <div id='nav-upload'>Upload</div>
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <UploadContainer />
        </Modal>
      </div>
    );
  }
}

export default UploadModal;
