import {legacy_createStore , combineReducers , applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { LoginReducer } from "./userRedux/login.reducer";
import { signupReducer } from "./userRedux/signup.reducer";
let rootReducer = combineReducers({
    UserLogin :LoginReducer,
    UserSignup:signupReducer,
});

export const store = legacy_createStore(rootReducer , applyMiddleware(thunk))