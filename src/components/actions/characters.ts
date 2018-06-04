import { IPayloadAction, IErrorAction, ActionTypes } from "./actionTypes";
import { Dispatch } from "react-redux";
import { IState } from "../store/configStore";
import { selectCharacters } from "../../airtable";

export const loadCharactersAction = async (dispatch: Dispatch<{}>, getState: () => IState) => {
    dispatch({
        type: ActionTypes.LOAD_CHARACTERS_BEGIN,
    });
    try {
        const characters = await selectCharacters(getState().airtable.config, {});
        dispatch(loadCharactersSuccess(characters));
    } catch (error) {
        dispatch(loadCharactersFailure(error));
    }
};
export const loadCharactersSuccess = (payload: object[]): IPayloadAction => ({
    type: ActionTypes.LOAD_CHARACTERS_BEGIN,
    payload,
});

export const loadCharactersFailure = (error: Error): IErrorAction => ({
    type: ActionTypes,
    error,
});
