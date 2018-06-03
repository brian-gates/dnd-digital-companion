import { Action } from "redux";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
    CONFIGURE_AIRTABLE: "CONFIGURE_AIRTABLE",
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

export interface IAirtableConfig {
    apiKey: string;
    baseId: string;
}

export interface IConfigureAirtableAction extends Action {
    config: IAirtableConfig;
}
