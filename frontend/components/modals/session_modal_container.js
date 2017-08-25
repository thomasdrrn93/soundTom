import { connect } from 'react-redux';
import SessionModal from './session_modal';
import { clearErrors } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch) => {
  return{
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(null, mapDispatchToProps)(SessionModal);
