import React from 'react';

class CommentItem extends React.Component{
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    debugger;
    this.props.destroyComment(this.props.comment);
  }

  render(){
    const buttons = this.props.currentUser.id ===
    this.props.comment.commenter_id ?
      <div id='comment-buttons'>
        <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete}>
        </i>
      </div> : <div></div>;

    return(
      <li id='individual-comment'>
        <img src={this.props.comment.commenter_pic} id='commenter-pic' />
        <div id='comment-info'>
          <div id='commenter-name'>{this.props.comment.commenter}</div>
          <div id='comment-bottom'>
            <div>{this.props.comment.body}</div>
            {buttons}
          </div>
        </div>
      </li>
    );
  }
}

export default CommentItem;
