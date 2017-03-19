import { connect } from 'react-redux';

import NoteFooter from './note_footer';

const mapStateToProps = (state) => ({
  note: state.display.note
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteFooter);
