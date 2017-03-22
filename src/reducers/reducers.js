import { SET_SEARCH_TERM, SET_ESSID, ADD_API_DATA } from '../actions/actions'

const DEFAULT_STATE = {
  searchTerm: '',
  essid: {},
  apiData: {}
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const setESSID = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {essid: action.apiData})
  return newState
}

const addApiData = (state, action) => {
  const newApiData = {}
  Object.assign(newApiData, state.apiData, action.apiData)
  const newState = {}
  Object.assign(newState, state, {apiData: newApiData})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case SET_ESSID:
      return setESSID(state, action)
    case ADD_API_DATA:
      return addApiData(state, action)
    default:
      return state
  }
}

export default rootReducer
