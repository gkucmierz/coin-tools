
import { ActionReducer, Action } from '@ngrx/store';

export const QR_READER_ADD_ITEM = 'QR_READER_ADD_ITEM';
export const QR_READER_CLEAN = 'QR_READER_CLEAN';

const INITIAL_STATE = {
  items: []
};

export const qrReaderReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case (QR_READER_ADD_ITEM):
      return Object.assign({},
        state,
        {
          items: [action.payload, ...state.items]
        }
      );
    case (QR_READER_CLEAN):
      return Object.assign({},
        state,
        INITIAL_STATE
      );
    default:
       return state;
  }
};
