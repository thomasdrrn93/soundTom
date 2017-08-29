import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import TrackEditContainer from '../edits/track_edit_container';

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

class EditTrackModal extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.props.clearErrors();
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.props.clearErrors();
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <div>
        <div className='edit-button' onClick={this.openModal}>Edit</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <TrackEditContainer track={this.props.track} />
        </Modal>
      </div>
    );
  }

}


export default EditTrackModal;
