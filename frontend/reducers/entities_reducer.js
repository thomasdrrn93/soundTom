import { combineReducers } from 'redux';
import TracksReducer from './tracks_reducer';
import UsersReducer from './users_reducer';
import CommentsReducer from './comments_reducer';
import SearchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  tracks: TracksReducer,
  users: UsersReducer,
  comments: CommentsReducer,
  search: SearchReducer
});

export default entitiesReducer;
