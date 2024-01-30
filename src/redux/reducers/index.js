import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  // Add other reducers if needed
});

export default rootReducer;
