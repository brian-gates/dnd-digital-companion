import { combineReducers } from "redux";
import airtable from "./airtable";
import characters from "./characters";

export default combineReducers({
    airtable,
    characters,
});
