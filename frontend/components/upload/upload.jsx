import React from 'react';

class Upload extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      image: '',
      audio: '',
      uploader_id: this.props.currentUser.id
    };
    this.updateText = this.updateText.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault;
    const track = Object.assign({}, this.state);
    this.props.createNewTrack(track);
  }

  updateText(type){
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  updateFile(type){
    return e => this.setState({
      [type]: e.currentTarget.files[0]
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.updateText('name')} value={this.state.name}/>
          <input type='file' onChange={this.updateFile('image')} />
          <input type='file' onChange={this.updateFile('audio')} />
          <button>Upload your track</button>
        </form>
      </div>
    );
  }
}

export default Upload;
