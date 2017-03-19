import { connect } from 'react-redux';

import Note from './note';

const mapStateToProps = (state) => ({
  note: state.display.note
});

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
