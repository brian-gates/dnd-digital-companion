import { ICharacter } from "./../reducers/characters";
import { IPayloadAction } from "./actionTypes";
import { Action } from "redux";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
    UPDATE_AIRTABLE_KEY: "UPDATE_AIRTABLE_KEY",
    UPDATE_AIRTABLE_BASE_ID: "UPDATE_AIRTABLE_BASE_ID",
    TEST_AIRTABLE_BEGIN: "TEST_AIRTABLE_BEGIN",
    TEST_AIRTABLE_SUCCESS: "TEST_AIRTABLE_SUCCESS",
    TEST_AIRTABLE_FAILURE: "TEST_AIRTABLE_FAILURE",
    LOAD_CHARACTERS_BEGIN: "LOAD_CHARACTERS_BEGIN",
    LOAD_CHARACTERS_SUCCESS: "LOAD_CHARACTERS_SUCCESS",
    LOAD_CHARACTERS_FAILURE: "LOAD_CHARACTERS_FAILURE",
};

export interface IErrorAction extends Action {
    error: Error;
}

export interface IPayloadAction extends Action {
    payload: object[];
}

export interface ICharacterPayload extends IPayloadAction {
    payload: ICharacter[];
}

export interface IStringValueAction extends Action {
    value: string;
}
