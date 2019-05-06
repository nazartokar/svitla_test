import { combineReducers } from 'redux';
import records from './records';
import query from './query';

export default combineReducers({
  records,
  query,
});
