import { combineReducers } from "redux";
import airtable from "./airtable";
import characters from "./characters";

export enum AsyncStatus {
    Idle,
    InProgress,
    Succeeded,
    Failed,
}

export default combineReducers({
    airtable,
    characters,
});
