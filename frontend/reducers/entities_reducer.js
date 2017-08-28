import { combineReducers } from 'redux';
import TracksReducer from './tracks_reducer';
import UsersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  tracks: TracksReducer,
  users: UsersReducer
});

export default entitiesReducer;
