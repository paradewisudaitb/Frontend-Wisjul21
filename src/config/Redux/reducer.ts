import { combineReducers } from 'redux';
import stageReducer from './Stage/reducer';

const reducer = combineReducers({
  stage: stageReducer,
});

export default reducer;