
import { ActionReducer, Action } from '@ngrx/store';

export const CHECK_SIGNATURE_SET_SIGNED_MSG = 'CHECK_SIGNATURE_SET_SIGNED_MSG';

const INITIAL_STATE = {
  signedMsg: ''
};

export const checkSignatureReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case (CHECK_SIGNATURE_SET_SIGNED_MSG):
      return Object.assign({},
        state,
        {
          signedMsg: action.payload
        }
      );
    default:
       return state;
  }
};
