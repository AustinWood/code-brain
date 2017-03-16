import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NavigationReducer from './navigation_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  display: NavigationReducer
});

export default RootReducer;
