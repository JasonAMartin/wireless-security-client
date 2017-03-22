import { SET_SEARCH_TERM, SET_ESSID, ADD_API_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addApiData (apiData, action) {
  return { type: action, apiData}
}

export function getApiData (apiPath, action) {
  return function (dispatch) {
    axios.get(`http://www.wireless-security.org/api/${apiPath}`)
      .then((response) => {
        dispatch(addApiData(response.data, action))
      })
      .catch((error) => console.error('axios error', error))
  }
}
