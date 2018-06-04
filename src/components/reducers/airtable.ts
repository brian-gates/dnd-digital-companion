import { ActionTypes } from "../actions/actionTypes";
import * as actions from "../actions/actionTypes";
import { Action } from "redux";

export interface IAirtableConfig {
    apiKey: string;
    baseId: string;
}

export interface IAirtableConfigTest {
    status: ConfigStatus;
    error?: Error;
}

export interface IAirtableState {
    config: IAirtableConfig;
    test: IAirtableConfigTest;
}

export enum ConfigStatus {
    Untested,
    Testing,
    Valid,
    Invalid,
}

const initialState: IAirtableState = {
    config: {
        apiKey: localStorage.getItem("airtable.apiKey") || "",
        baseId: localStorage.getItem("airtable.baseId") || "",
    },
    test: {
        status: ConfigStatus.Untested,
    },
};

export default (
    state = initialState,
    action: Action,
) => {
    switch (action.type) {
        case ActionTypes.TEST_AIRTABLE_BEGIN:
            return {
                ...state,
                test: {
                    ...state.test,
                    status: ConfigStatus.Testing,
                },
            };
            case ActionTypes.TEST_AIRTABLE_SUCCESS:
            return {
                ...state,
                test: {
                    ...state.test,
                    status: ConfigStatus.Valid,
                },
            };
        case ActionTypes.TEST_AIRTABLE_FAILURE:
            return {
                ...state,
                test: {
                    ...state.test,
                    status: ConfigStatus.Invalid,
                    error: (action as actions.IErrorAction).error,
                },
            };
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
