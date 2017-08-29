import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import UploadModal from './upload_modal';

const mapDispatchToProps = (dispatch) => {
  return{
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(null, mapDispatchToProps)(UploadModal);
