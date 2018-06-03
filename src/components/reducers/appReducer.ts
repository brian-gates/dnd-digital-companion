import { Action } from "redux";
import { initState } from "./rootReducer";
import * as actions from "../actions/actionTypes";

export const app = (
    state = initState,
    action: Action,
) => {
    switch (action.type) {
        case actions.ActionTypes.CONFIGURE_AIRTABLE:
            return {
                airtableConfig: (action as actions.IConfigureAirtableAction).config,
                ...state,
            };
        case actions.ActionTypes.INIT_STORE:
            return (action as actions.IInitStoreAction);
        default:
            return state;
    }
};
