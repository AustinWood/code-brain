import NotesIndex from './notes_index';
// import { logout } from '../../actions/session_actions';
// import { setMode, addNote } from '../../actions/navigation_actions';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';
import { allNotes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  notes: allNotes(state),
  display: state.display,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
