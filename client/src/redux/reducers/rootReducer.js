// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './userReducer';
import modulesReducer from './modulesReducer';
import contentReducer from './contentReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modules: modulesReducer,
  content: contentReducer,
  chat: chatReducer,
});

export default rootReducer;