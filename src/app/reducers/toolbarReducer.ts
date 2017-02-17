
export const SET_TITLE = 'SET_TITLE';

const INITIAL_STATE = {
  title: 'Coin Tools'
};

export const toolbarReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case (SET_TITLE):
      return Object.assign({},
        state,
        {
          title: payload
        }
      );
  }
};
