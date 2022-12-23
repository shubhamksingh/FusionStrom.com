import {
  user_signup_loading,
  user_signup_success,
  user_signup_error,
} from "./signup.type";

export const signupInitialState = {
  loading: false,
  data: {
    status: false,
    message: "",
  },
  error: false,
};

export const signupReducer = (state = signupInitialState, { type, payload }) => {

  switch (type) {
    case user_signup_loading: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case user_signup_error: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case user_signup_success: {
      console.log('payload:', payload)
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...state.data , message:payload.message
        },
      };
    }
    default:
      return state;
  }
};
