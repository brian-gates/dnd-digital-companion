import { combineReducers } from "redux";
import { IState } from "../store/configStore";
import { app } from "./appReducer";

export const initState: IState = {
    key: String
};

export const rootReducer = combineReducers({
    app,
});
