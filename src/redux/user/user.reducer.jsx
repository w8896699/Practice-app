import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  errMsg: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errMsg: null,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errMsg: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
