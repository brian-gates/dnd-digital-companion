import { combineReducers } from "redux";
import { IState } from "../store/configStore";
import { app } from "./appReducer";

export const initState: IState = {
    key: "",
    airtableConfig: {
        apiKey: localStorage.getItem("airtable.apiKey") || "",
        baseId: localStorage.getItem("airtable.baseId") || "",
    },
};

export const rootReducer = combineReducers({
    app,
});
