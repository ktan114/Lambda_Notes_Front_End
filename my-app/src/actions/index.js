export const RETRIEVE_NOTES = 'RETRIEVE_SCHEDULES';
export const CREATE_NOTES= 'CREATE_SCHEDULE';

export function retrieveNotes() {
  const requestOptions = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };
  axios
    .get(`${url[url.basePath]}/notes`, requestOptions)
    .then(res => {
      //   this.setState({ notes: res.data });
      return {
        type: RETRIEVE_NOTES,
        payload: res.data,
      };
    })
    .catch(err => {
      console.log(err);
    });
}
