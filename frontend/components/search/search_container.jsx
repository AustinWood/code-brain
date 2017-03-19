import { connect } from 'react-redux';
import { fetchNotes, receiveNote } from '../../actions/note_actions';
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
  receiveNote: note => dispatch(receiveNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
