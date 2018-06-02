import { Action } from "redux";
import { initState } from "./rootReducer";
import * as actions from "../actions/actionTypes";

export const app = (
    state = initState,
    action: Action,
) => {
    switch (action.type) {
        case actions.ActionTypes.INIT_STORE:
            return (action as actions.IInitStoreAction);
        case actions.ActionTypes.SET_KEY: {
            const key = (action as actions.ISetKeyAction).key;
            return { key, ...state };
        }
        default:
            return state;
    }
};
