import { handleActions } from 'redux-actions';

import {
  updateData,
} from '../actions/userAction';

export default handleActions({
  [updateData]: (state, action) => {
    return ({
      ...state, ...action.payload,
    });
  }
}, {
  id: '',
  name: '',
  age: '',
});
