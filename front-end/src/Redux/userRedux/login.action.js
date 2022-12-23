// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// import { auth } from "../../Firebase/firebase";

import axios from "axios";
import {
  user_login_loading,
  user_login_error,
  user_login_success,
  user_logout,
  AUTH_GOOGLE_SUCCESS,
} from "./login.type";

export const userLogin = (formData) => async (dispatch) => {
  dispatch({ type: user_login_loading });

  try {
    let res = await axios.post("https://time-tracker-server.onrender.com/user/login", formData);
    console.log("res:",res);
    dispatch({ type: user_login_success, payload: res.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: user_login_error });
  }
};

export const userLogout = () => ({ type: user_logout });

// export const Sigup_google = () => async (dispatch) => {
//   try {
//     const googleauth = new GoogleAuthProvider();
//     const res = await signInWithPopup(auth, googleauth);
//     // console.log("res: ", res);
//     dispatch({
//       type: AUTH_GOOGLE_SUCCESS,
//       payload: {
//         email: res.user.email,
//         name: res.user.displayName,
//         message: "You have signup Successfully",
//       },
//     });
//   } catch (err) {
//     dispatch({ type: user_login_error });
//     console.log(err);
//   }
// };
