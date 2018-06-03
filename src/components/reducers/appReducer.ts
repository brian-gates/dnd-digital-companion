import { Action } from "redux";
import { initState } from "./rootReducer";
import * as actions from "../actions/actionTypes";

export const app = (
    state = initState,
    action: Action,
) => {
    switch (action.type) {
        case actions.ActionTypes.CONFIGURE_AIRTABLE:
            const airtableConfig = (action as actions.IConfigureAirtableAction).config;
            return {
                airtableConfig,
                ...state,
            };
        default:
            return state;
    }
};
