import { ICharacter } from "./characters";
import { ICharacterPayload } from "./../actions/actionTypes";
import { Action } from "redux";
import { ActionTypes, IErrorAction, IPayloadAction } from "../actions/actionTypes";
import { sortBy, path } from "ramda";

interface IInitiativeState {
    characters: ICharacter[];
}

const initialState: IInitiativeState = {
    characters: [],
};

const characterInCombat
    : (character: ICharacter) => boolean
    = (character) => character.fields["In Combat"]
;

const sortByInitiative = sortBy(path(["fields", "Initiative"]));

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOAD_CHARACTERS_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.LOAD_CHARACTERS_FAILURE:
            return {
                ...state,
                loading: false,
                failed: true,
                error: (action as IErrorAction).error,
            };
        case ActionTypes.LOAD_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                failed: false,
                characters: sortByInitiative((action as ICharacterPayload).payload.filter(characterInCombat)),
            };
        default:
            break;
    }
    return state;
};
