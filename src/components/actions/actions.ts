import { ActionTypes, IConfigureAirtableAction, IAirtableConfig } from "./actionTypes";
import { Action } from "redux";

export const initStoreAction = (): Action => ({ type: ActionTypes.INIT_STORE });

export const configureAirtableAction = (config: IAirtableConfig): IConfigureAirtableAction => ({
    type: ActionTypes.CONFIGURE_AIRTABLE,
    config,
});

export const loadCharactersAction = (): Action => ({
    type: ActionTypes.LOAD_CHARACTERS,
});
