import { RETRIEVE_NOTES } from '../actions/index';

const initialState = {
  notes: [],
};

function lambdaNotes(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_NOTES:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default lambdaNotes