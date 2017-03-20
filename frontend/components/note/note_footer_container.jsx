import { connect } from 'react-redux';

import NoteFooter from './note_footer';

const mapStateToProps = (state) => ({
  note: state.navigation.note
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteFooter);
