
import { ActionReducer, Action } from '@ngrx/store';

export const SET_TITLE = 'SET_TITLE';

const INITIAL_STATE = {
  title: 'Coin Tools'
};

export const toolbarReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case (SET_TITLE):
      return Object.assign({},
        state,
        {
          title: action.payload
        }
      );
    default:
       return state;
  }
};
