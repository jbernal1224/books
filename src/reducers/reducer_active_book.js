import { BOOK_SELECTED_ACTION } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case BOOK_SELECTED_ACTION:
      return action.payload;
  }

  return state;
}
