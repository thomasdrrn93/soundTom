import React from 'react';

class CommentItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li id='individual-comment'>
        <img src={this.props.comment.commenter_pic} id='commenter-pic' />
        {this.props.comment.body}
      </li>
    );
  }
}

export default CommentItem;
