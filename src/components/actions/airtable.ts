import { Action } from "redux";
import { ActionTypes, IStringValueAction } from "./actionTypes";
import { Dispatch } from "react-redux";
import Airtable from "airtable";
import { IState } from "../store/configStore";
import { IAirtableConfig } from "../reducers/airtable";

const configToBase = ({ apiKey, baseId }: IAirtableConfig) =>
    new Airtable({ apiKey }).base(baseId);

const validateConfig = (config: IAirtableConfig): Promise<boolean> =>
    new Promise((resolve, reject) => {
        const base = configToBase(config);
        base("Characters").select({ maxRecords: 1, view: "Main View" }).eachPage(
            (records: object[], next: () => void) => next(),
            (err: Error) => err ? reject(err) : resolve(true),
        );
    })
;

export const updateKey = (key: string): IStringValueAction => ({
    type: ActionTypes.UPDATE_AIRTABLE_KEY,
    value: key,
});

export const updateBaseId = (baseId: string): IStringValueAction => ({
    type: ActionTypes.UPDATE_AIRTABLE_BASE_ID,
    value: baseId,
});

export const fixAirtable = () => async (dispatch: Dispatch<{}>, getState: () => IState) => {
    const { airtable: {
        config: { apiKey, baseId },
    } } = getState();
    if (!(apiKey && baseId)) {
        return;
    }

    dispatch({
        type: ActionTypes.FIX_DESCRIPTIONS_BEGIN,
    } as Action);

};

export const testAirtable = () => async (dispatch: Dispatch<{}>, getState: () => IState) => {
    const { airtable: {
        config,
        config: { apiKey, baseId },
    } } = getState();
    if (!(apiKey && baseId)) {
        return;
    }

    dispatch({
        type: ActionTypes.TEST_AIRTABLE_BEGIN,
    } as Action);

    try {
        await validateConfig(config);
        dispatch({
            type: ActionTypes.TEST_AIRTABLE_SUCCESS,
        } as Action);
    } catch (error) {
        dispatch({
            type: ActionTypes.TEST_AIRTABLE_FAILURE,
            error,
        });
    }
};
