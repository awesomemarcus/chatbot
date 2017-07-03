import { combineReducers } from 'redux';

import coreReducer from './core/reducers/coreReducer';

const rootReducer = combineReducers({
  coreReducer,
});

export default rootReducer;
