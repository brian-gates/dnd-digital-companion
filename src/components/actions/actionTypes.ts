import { Action } from "redux";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
    CONFIGURE_AIRTABLE: "CONFIGURE_AIRTABLE",
    LOAD_CHARACTERS: "LOAD_CHARACTERS",
};

export interface IAirtableConfig {
    apiKey: string;
    baseId: string;
}

export interface IConfigureAirtableAction extends Action {
    config: IAirtableConfig;
}
