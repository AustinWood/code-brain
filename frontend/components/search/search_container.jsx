import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';
import { selectNote } from '../../actions/navigation_actions';
import { asArray } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = state => {
  let selectedNoteId = null;
  if (state.display.note !== null) {
    selectedNoteId = state.display.note.id;
  }
  return {
    notes: asArray(state),
    display: state.display,
    selectedNoteId: selectedNoteId
  };
};

const mapDispatchToProps = dispatch => ({
  requestNotes: () => dispatch(fetchNotes()),
  selectNote: note => dispatch(selectNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
