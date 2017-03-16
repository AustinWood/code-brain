import NotesIndex from './notes_index';
// import { logout } from '../../actions/session_actions';
// import { setMode, addNote } from '../../actions/navigation_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ display }) => ({
  // selectedTags: display.selectedTags
});

const mapDispatchToProps = dispatch => ({
  // none
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesIndex);
