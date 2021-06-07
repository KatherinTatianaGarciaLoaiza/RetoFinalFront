import { combineReducers } from 'redux';
import okrReducer from './okrReducer';

const rootReducer = combineReducers({
  okr: okrReducer,
});

export default rootReducer;
