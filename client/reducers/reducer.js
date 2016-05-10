
import { handleActions } from 'redux-actions';
import update from 'react-addons-update';

const initialState = {};

export default handleActions({
  'action'(state, action) {
    return update(state, {
      $set: action.payload || {},
    });
  },
}, initialState);
