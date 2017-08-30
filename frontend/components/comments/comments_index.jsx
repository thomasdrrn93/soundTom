import React from 'react';
import CommentItemContainer from './comment_item_container';

class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchAllComments(this.props.trackId);
  }
  render(){
    const comments = this.props.comments;
    return(
      <ul id='comments-index'>
        {comments.map(comment => <CommentItemContainer key={comment.id}
          comment={comment} />)}
      </ul>
    );
  }
}

export default CommentsIndex;
