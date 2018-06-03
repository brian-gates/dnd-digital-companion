import { Action } from "redux";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
    UPDATE_AIRTABLE_KEY: "UPDATE_AIRTABLE_KEY",
    UPDATE_AIRTABLE_BASE_ID: "UPDATE_AIRTABLE_BASE_ID",
    LOAD_CHARACTERS_BEGIN: "LOAD_CHARACTERS_BEGIN",
    LOAD_CHARACTERS_SUCCESS: "LOAD_CHARACTERS_SUCCESS",
    LOAD_CHARACTERS_FAILURE: "LOAD_CHARACTERS_FAILURE",
};

export interface IFetchSuccess extends Action {
    payload: object[];
}

export interface IFetchFailure extends Action {
    error: Error;
}

export interface IStringValueAction extends Action {
    value: string;
}

export interface IAirtableConfig {
    apiKey: string;
    baseId: string;
}

export interface IConfigureAirtableAction extends Action {
    config: IAirtableConfig;
}
