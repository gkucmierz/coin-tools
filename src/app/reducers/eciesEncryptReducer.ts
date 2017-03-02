
import { ActionReducer, Action } from '@ngrx/store';

export const ECIES_ENCRYPT_SET_MSG = 'ECIES_ENCRYPT_SET_MSG';
export const ECIES_ENCRYPT_SET_SENDER_PRIV = 'ECIES_ENCRYPT_SET_SENDER_PRIV';
export const ECIES_ENCRYPT_SET_RECIPIENT_PUB ='ECIES_ENCRYPT_SET_RECIPIENT_PUB';
export const ECIES_ENCRYPT_CLEAR ='ECIES_ENCRYPT_CLEAR';

const INITIAL_STATE = {
  msg: '',
  senderPriv: '',
  recipientPub: ''
};

export const eciesEncryptReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case (ECIES_ENCRYPT_SET_MSG):
      return Object.assign({},
        state,
        {
          msg: action.payload
        }
      );
    case (ECIES_ENCRYPT_SET_SENDER_PRIV):
      return Object.assign({},
        state,
        {
          senderPriv: action.payload
        }
      );
    case (ECIES_ENCRYPT_SET_RECIPIENT_PUB):
      return Object.assign({},
        state,
        {
          recipientPub: action.payload
        }
      );
    case (ECIES_ENCRYPT_CLEAR):
      return Object.assign({},
        state,
        INITIAL_STATE
      );
    default:
       return state;
  }
};
