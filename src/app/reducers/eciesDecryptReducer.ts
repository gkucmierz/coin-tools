
import { ActionReducer, Action } from '@ngrx/store';

export const ECIES_DECRYPT_SET_ENCRYPTED_MSG = 'ECIES_DECRYPT_SET_ENCRYPTED_MSG';
export const ECIES_DECRYPT_SET_RECIPIENT_PRIV = 'ECIES_DECRYPT_SET_RECIPIENT_PRIV';
export const ECIES_DECRYPT_SET_SENDER_PUB ='ECIES_DECRYPT_SET_SENDER_PUB';
export const ECIES_DECRYPT_CLEAR ='ECIES_DECRYPT_CLEAR';

const INITIAL_STATE = {
  encryptrdMsg: '',
  recipientPriv: '',
  senderPub: ''
};

export const eciesDecryptReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case (ECIES_DECRYPT_SET_ENCRYPTED_MSG):
      return Object.assign({},
        state,
        {
          encryptrdMsg: action.payload
        }
      );
    case (ECIES_DECRYPT_SET_RECIPIENT_PRIV):
      return Object.assign({},
        state,
        {
          recipientPriv: action.payload
        }
      );
    case (ECIES_DECRYPT_SET_SENDER_PUB):
      return Object.assign({},
        state,
        {
          senderPub: action.payload
        }
      );
    case (ECIES_DECRYPT_CLEAR):
      return Object.assign({},
        state,
        INITIAL_STATE
      );
    default:
       return state;
  }
};
