import NotesIndex from './notes_index';
// import { logout } from '../../actions/session_actions';
// import { setMode, addNote } from '../../actions/navigation_actions';
import { connect } from 'react-redux';
import { fetchNotes, fetchNote } from '../../actions/note_actions';
import { allNotes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  notes: allNotes(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestNotes: () => dispatch(fetchNotes())
  // ,
  // createTodo: todo => dispatch(createTodo(todo)),
  // updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
