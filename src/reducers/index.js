import { combineReducers } from 'redux';

import videoActiveReducer from './videoActiveReducer'

export default combineReducers({
    videoActive: videoActiveReducer
})