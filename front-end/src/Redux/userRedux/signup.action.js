import {
  user_signup_loading,
  user_signup_success,
  user_signup_error,
} from "./signup.type";

import axios from "axios";

export const SignupApi = (formData) => async (dispatch) => {
  // console.log('formData: ', formData);
  dispatch({ type: user_signup_loading });
  try {
    let res = await axios.post("https://time-tracker-server.onrender.com/user/signup", formData);
    console.log('data:', res.data)
    dispatch({ type: user_signup_success, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: user_signup_error });
  }
};
