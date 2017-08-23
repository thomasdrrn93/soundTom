import React from 'react';

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
    debugger;
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
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.updateText('name')} value={this.state.name}/>
          <input type='file' onChange={this.updateImage} />
          <input type='file' onChange={this.updateAudio} />
          <button>Upload your track</button>
        </form>
      </div>
    );
  }
}

export default Upload;
