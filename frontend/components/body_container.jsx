import Body from './body';
import { connect } from 'react-redux';

const mapStateToProps = ({ display }) => ({
  mode: display.mode
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Body);
