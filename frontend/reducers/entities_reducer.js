import { combineReducers } from 'redux';
import TracksReducer from './tracks_reducer';

const entitiesReducer = combineReducers({
  tracks: TracksReducer
});

export default entitiesReducer;
