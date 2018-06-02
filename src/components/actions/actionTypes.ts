import { Action } from "redux";

export const ActionTypes = {
    INIT_STORE: "INIT_STORE",
    SET_KEY: "SET_KEY",
};

export interface IInitStoreAction extends Action {
}

export interface ISetKeyAction extends Action {
    key: String;
}

