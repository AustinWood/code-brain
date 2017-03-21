import MyModal from './my_modal';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  // navigation: state.navigation
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyModal);
