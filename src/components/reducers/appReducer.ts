import { Action } from "redux";
import { initState } from "./rootReducer";
import * as actions from "../actions/actionTypes";
import { ActionTypes } from "../actions/actionTypes";

export const app = (
    state = initState,
    action: Action,
) => {
    switch (action.type) {
        case ActionTypes.UPDATE_AIRTABLE_KEY:
            const apiKey = (action as actions.IStringValueAction).value;
            localStorage.setItem("airtable.apiKey", apiKey);
            return {
                ...state,
                airtableConfig: {
                    ...state.airtableConfig,
                    apiKey,
                },
            };
        case ActionTypes.UPDATE_AIRTABLE_BASE_ID:
            const baseId = (action as actions.IStringValueAction).value;
            localStorage.setItem("airtable.baseId", baseId);
            return {
                ...state,
                airtableConfig: {
                    ...state.airtableConfig,
                    baseId,
                },
            };
        default:
            return state;
    }
};
