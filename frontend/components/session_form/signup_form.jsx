import React from 'react';

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/stream');
    }
  }

  update(type) {
   return e => this.setState({
     [type]: e.currentTarget.value
   });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup({user});
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
    return(
        <form onSubmit={this.handleSubmit} className='auth-form'>
              <h2 className='auth-title'>Sign Up</h2>
              {this.renderErrors()}
              <input className= 'auth-bar' type="text"
                value={this.state.username}
                placeholder= 'Enter your username'
                onChange={this.update('username')}
              />
            <input className='auth-bar' type="password"
                value={this.state.password}
                placeholder= 'Enter your password'
                onChange={this.update('password')}
              />
            <button className='button' className='form-button'>Sign Up</button>
        </form>
    );
  }
}

export default SignupForm;
