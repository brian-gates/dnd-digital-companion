import { IAirtableConfig, ActionTypes } from "../actions/actionTypes";
import * as actions from "../actions/actionTypes";
import { Action } from "redux";

export interface IState {
    config: IAirtableConfig;
}

const initialState: IState = {
    config: {
        apiKey: localStorage.getItem("airtable.apiKey") || "",
        baseId: localStorage.getItem("airtable.baseId") || "",
    },
};

export default (
    state = initialState,
    action: Action,
) => {
    switch (action.type) {
        case ActionTypes.UPDATE_AIRTABLE_KEY:
            const apiKey = (action as actions.IStringValueAction).value;
            localStorage.setItem("airtable.apiKey", apiKey);
            return {
                ...state,
                config: {
                    ...state.config,
                    apiKey,
                },
            };
        case ActionTypes.UPDATE_AIRTABLE_BASE_ID:
            const baseId = (action as actions.IStringValueAction).value;
            localStorage.setItem("airtable.baseId", baseId);
            return {
                ...state,
                config: {
                    ...state.config,
                    baseId,
                },
            };
        default:
            return state;
    }
};
