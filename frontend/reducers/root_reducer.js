import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NavigationReducer from './navigation_reducer';
import NotesReducer from './notes_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  display: NavigationReducer,
  notes: NotesReducer
});

export default RootReducer;
