import { Action } from "redux";
import { IFetchSuccess, IFetchFailure, ActionTypes } from "./actionTypes";

export const loadCharactersAction = (): Action => ({
    type: ActionTypes.LOAD_CHARACTERS_BEGIN,
});

export const loadCharactersSuccess = (payload: object[]): IFetchSuccess => ({
    type: ActionTypes.LOAD_CHARACTERS_BEGIN,
    payload,
});

export const loadCharactersFailure = (error: Error): IFetchFailure => ({
    type: ActionTypes,
    error,
});
