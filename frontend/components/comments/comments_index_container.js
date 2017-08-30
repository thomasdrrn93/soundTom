import { connect } from 'react-redux';
import { fetchAllComments } from '../../actions/comment_actions';
import { commentsArray } from '../../reducers/selectors';
import CommentsIndex from './comments_index';

const mapStateToProps = (state) =>{
  const comments = commentsArray(state);
  return{
    comments: comments || []
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchAllComments: (trackId) => dispatch(fetchAllComments(trackId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex);
