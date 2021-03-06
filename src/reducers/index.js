import { combineReducers } from 'redux'

import userReducer from './userReducer'
import locationReducer from './locationReducer'
import modalReducer from './modalReducer'
import postReducer from './postReducer'

export default combineReducers({
	userReducer,
	locationReducer,
	modalReducer,
	postReducer
})