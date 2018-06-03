import { Action } from "redux";
import { ActionTypes, IStringValueAction } from "./actionTypes";

export const updateKey = (apiKey: string): IStringValueAction => ({
    type: ActionTypes.UPDATE_AIRTABLE_KEY,
    value: apiKey,
});

export const updateBaseId = (baseId: string): IStringValueAction => ({
    type: ActionTypes.UPDATE_AIRTABLE_BASE_ID,
    value: baseId,
});
