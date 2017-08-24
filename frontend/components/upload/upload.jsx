import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import FileInput from 'react-file-input';

class Upload extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      image: '',
      image_url: '',
      audio: '',
      audio_url: '',
      uploader_id: this.props.currentUser.id
    };
    this.updateText = this.updateText.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[name]", this.state.name);
    formData.append("track[audio]", this.state.audio);
    formData.append("track[image]", this.state.image);
    formData.append("track[uploader_id]", this.state.uploader_id);
    this.props.createNewTrack(formData);
  }

  updateText(type){
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  updateImage(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    this.setState({image: file});

  }

  updateAudio(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    this.setState({audio: file});
  }
  render(){
    return (
      <div>
        <header>
          <NavBarContainer />
        </header>
        <div className='after-header'>
          <div className= 'upload-div'>
            <form onSubmit={this.handleSubmit} className='upload-form'>
              <div className='upload-title'>Add a Track</div>
              <label for='upload-image' className='file-label'>
                <div className='file-div'>Upload Image</div>
                <input className='file-input' type="file" id="upload-image" onChange={this.updateImage} />
              </label>
              <label for='upload-audio' className='file-label'>
                <div className='file-div'>Upload Audio</div>
                  <input className='file-input' type="file" id="upload-audio" onChange={this.updateAudio} />
              </label>
              <input className= 'upload-input' type='text' onChange={this.updateText('name')} placeholder='Track name' value={this.state.name}/>
              <input className= 'upload-input' type='text' onChange={this.updateText('genre')} placeholder= 'Genre name' value={this.state.genre}/>
              <button className= 'upload-button'>Upload your track</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
