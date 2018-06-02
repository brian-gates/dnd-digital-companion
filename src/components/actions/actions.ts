import { ActionTypes, IInitStoreAction } from "./actionTypes";

export const initStoreAction = (): IInitStoreAction => {
    return { type: ActionTypes.INIT_STORE };
};

export const actionCreators = {
};
