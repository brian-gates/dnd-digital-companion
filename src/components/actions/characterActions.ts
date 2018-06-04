import { Action } from "redux";
import { IFetchSuccessAction, IFetchFailureAction, ActionTypes } from "./actionTypes";

export const loadCharactersAction = (): Action => ({
    type: ActionTypes.LOAD_CHARACTERS_BEGIN,
});

export const loadCharactersSuccess = (payload: object[]): IFetchSuccessAction => ({
    type: ActionTypes.LOAD_CHARACTERS_BEGIN,
    payload,
});

export const loadCharactersFailure = (error: Error): IFetchFailureAction => ({
    type: ActionTypes,
    error,
});
