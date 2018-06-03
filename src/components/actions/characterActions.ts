import { Action } from "redux";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
    CONFIGURE_AIRTABLE: "CONFIGURE_AIRTABLE",
    LOAD_CHARACTERS: "LOAD_CHARACTERS",
};

export const loadCharactersAction = (): Action => ({
    type: ActionTypes.LOAD_CHARACTERS,
});
