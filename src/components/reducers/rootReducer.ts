import { combineReducers } from "redux";
import { IState } from "../store/configStore";
import { app } from "./appReducer";

export const initState: IState = {
    key: "",
    airtableConfig: {
        apiKey: "",
        baseId: "",
    },
};

export const rootReducer = combineReducers({
    app,
});
