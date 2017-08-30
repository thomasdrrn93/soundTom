import { connect } from 'react-redux';
import { destroyComment } from '../../actions/comment_actions';
import CommentItem from './comment_item';

const mapStateToProps = (state) =>{
  return{
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    destroyComment: (comment) => dispatch(destroyComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
