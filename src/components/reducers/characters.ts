import { Action } from "redux";
import { ActionTypes, IErrorAction, IPayloadAction } from "../actions/actionTypes";

export interface ICharacter {
    name: string;
}

export interface ICharacterState {
    status: LoadStatus;
    characters: ICharacter[];
}

export enum LoadStatus {
    Idle,
    InProgress,
    Succeeded,
    Failed,
}

const initialState: ICharacterState = {
    status: LoadStatus.Idle,
    characters: [],
};

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
                characters: (action as IPayloadAction).payload,
            };
        default:
            break;
    }
    return state;
};
