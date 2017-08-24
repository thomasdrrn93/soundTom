import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import FileInput from 'react-file-input';

class Upload extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      genre:'',
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

  componentWillReceiveProps(nextProps) {
    const nextTrack = nextProps.newTrack;
    if (this.props.newTrack !== nextTrack) {
      this.props.history.push(`/tracks/${nextTrack.id}`);
    }
  }

  handleSubmit(e){
    debugger;
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[name]", this.state.name);
    formData.append("track[audio]", this.state.audio);
    formData.append("track[image]", this.state.image);
    formData.append("track[uploader_id]", this.state.uploader_id);
    formData.append("track[genre]", this.state.genre);
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
  renderErrors() {
    return(
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
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
              <label htmlFor='upload-image' className='file-label'>
                <div className='file-div'>Upload Image</div>
                <input className='file-input' type="file" id="upload-image" onChange={this.updateImage} />
              </label>
              <label htmlFor='upload-audio' className='file-label'>
                <div className='file-div'>Upload Audio</div>
                  <input className='file-input' type="file" id="upload-audio" onChange={this.updateAudio} />
              </label>
              <input className= 'upload-input' type='text' onChange={this.updateText('name')} placeholder='Track name' value={this.state.name}/>
              <input className= 'upload-input' type='text' onChange={this.updateText('genre')} placeholder= 'Genre name' value={this.state.genre}/>
              <button className= 'upload-button'>Upload your track</button>
              {this.renderErrors()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
