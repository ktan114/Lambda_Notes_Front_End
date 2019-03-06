import axios from 'axios';

export const RETRIEVE_NOTES = 'RETRIEVE_SCHEDULES';
export const CREATE_NOTES = 'CREATE_SCHEDULE';
const url = require("../config/config");


function fetchNotes() {
    return {
        type: CREATE_NOTES
    }
}

export function retrieveNotes() {
  const requestOptions = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };
  return dispatch => {
      dispatch(fetchNotes());
      return fetch(url, requestOptions)
  }
//   axios
//     .get(`${url[url.basePath]}/notes`, requestOptions)
//     .then(res => {
//       //   this.setState({ notes: res.data });
//       return {
//         type: RETRIEVE_NOTES,
//         payload: res.data,
//       };
//     })
//     .catch(err => {
//       console.log(err);
//     });
}
