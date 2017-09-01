import React from 'react';

class TrackEdit extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: this.props.track.name,
      genre: this.props.track.genre,
      image: this.props.track.image,
      audio: this.props.track.audio,
      uploader_id: this.props.track.uploader_id,
      loading: false
    };
    this.updateText = this.updateText.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    const nextTrack = nextProps.track;
    this.props.history.push(`/tracks/${nextTrack.id}`);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({loading: true});
    const formData = new FormData();
    formData.append("track[name]", this.state.name);
    formData.append("track[audio]", this.state.audio);
    formData.append("track[image]", this.state.image);
    formData.append("track[uploader_id]", this.state.uploader_id);
    formData.append("track[genre]", this.state.genre);
    this.props.updateTrack(formData, this.props.track.id)
    .then(({ track }) => this.props.history.push(`/tracks/${track.id}`))
    .fail(() => this.setState({loading: false}));
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
    const button = this.state.loading === false ? <button
       className= 'upload-button'>Upload your track</button> : <button
          className= 'loading-button' disabled>Loading</button>;
    return (
      <div className= 'upload-div'>
        <form onSubmit={this.handleSubmit} className='upload-form'>
          <div className='upload-title'>{this.props.track.name}</div>
          <label htmlFor='upload-image' className='file-label'>
            <div className='file-div'>Update Image</div>
            <input className='file-input'
              type="file" id="upload-image" onChange={this.updateImage} />
          </label>
          <input className= 'upload-input' type='text'
            onChange={this.updateText('name')} placeholder={this.state.name}
            value={this.state.name}/>
          <input className= 'upload-input' type='text'
            onChange={this.updateText('genre')}
            placeholder={this.state.genre} value={this.state.genre}/>
          {button}
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default TrackEdit;
