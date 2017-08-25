import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import PlayingReducer from './playing_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  playing: PlayingReducer
});

export default rootReducer;
