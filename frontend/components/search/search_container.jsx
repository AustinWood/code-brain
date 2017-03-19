import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';
import { selectNote } from '../../actions/navigation_actions';

// import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = state => ({
  notes: asArray(state),
  display: state.display
});

const mapDispatchToProps = dispatch => ({
  requestNotes: () => dispatch(fetchNotes()),
  selectNote: note => dispatch(selectNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
