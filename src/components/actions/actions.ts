import { ActionTypes } from "./actionTypes";
import { Action } from "redux";

export const initStoreAction = (): Action => ({ type: ActionTypes.INIT_STORE });
