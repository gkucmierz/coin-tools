
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_ITEM = 'ADD_ITEM';
export const CLEAN = 'CLEAN';

const INITIAL_STATE = {
  items: []
};

export const qrReaderReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case (ADD_ITEM):
      return Object.assign({},
        state,
        {
          items: [action.payload, ...state.items]
        }
      );
    case (CLEAN):
      return Object.assign({},
        state,
        {
          items: []
        }
      );
    default:
       return state;
  }
};
