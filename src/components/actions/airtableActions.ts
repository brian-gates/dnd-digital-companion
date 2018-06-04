import { Action } from "redux";
import { ActionTypes, IStringValueAction } from "./actionTypes";
import { Dispatch } from "react-redux";

export const updateKey = (key: string): IStringValueAction => ({
    type: ActionTypes.UPDATE_AIRTABLE_KEY,
    value: key,
});

export const updateBaseId = (baseId: string): IStringValueAction => ({
    type: ActionTypes.UPDATE_AIRTABLE_BASE_ID,
    value: baseId,
});

export const testAirtable = (dispatch: Dispatch<{}>) => async () => {
    dispatch({
        type: ActionTypes.TEST_AIRTABLE_BEGIN,
    } as Action);
    dispatch({
        type: ActionTypes.TEST_AIRTABLE_SUCCESS,
    } as Action);
};
