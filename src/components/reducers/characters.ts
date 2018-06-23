import { Action } from "redux";
import { ActionTypes, IErrorAction, IPayloadAction } from "../actions/actionTypes";
import { AsyncStatus } from "./root";

export interface IImage {
    id: string;
    url: string;
    thumbnails: {
        small: { url: string; };
        large: { url: string; };
    };
}

export interface ICharacter {
    id: string;
    fields: {
        Name: string;
        Description: string;
        "Inspirational images": IImage[];
        "Max Hitpoints": number;
        "Max HP": number;
        "Current Hitpoints": number;
        "In Combat": boolean;
        "Initiative": number;
    };
}

export interface ICharactersState {
    status: AsyncStatus;
    characters: ICharacter[];
}

const initialState: ICharactersState = {
    status: AsyncStatus.Idle,
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
