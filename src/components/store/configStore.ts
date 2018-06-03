import { createStore, applyMiddleware, Dispatch } from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { initStoreAction } from "../actions/actions";
import { rootReducer } from "../reducers/rootReducer";
import { IAirtableConfig } from "../actions/actionTypes";
// import Airtable from "airtable";

export interface IState {
    key: string;
    airtableConfig: IAirtableConfig;
}

export const initStore = () => {
    return (dispatch: Dispatch<{}>) => {
        return dispatch(initStoreAction());
    };
};

export const loadCharacters = () => {
    return (dispatch: Dispatch<{}>) => {
        // dispatch(loadCharactersBegin());
        // const base = new Airtable({ apiKey }).base(baseId);
        // base("Characters").select({
        //     sort: [
        //         { field: "Name", direction: "asc" },
        //     ],
        // }).eachPage(function page(records, fetchNextPage) {
        //     records.forEach(function(record) {
        //         console.log("Retrieved ", record.get("Name"));
        //     });
        //     fetchNextPage();
        // }, function done(error: Error) {
        //     console.log(error);
        // });
        // return dispatch(loadCharactersAction());
    };
};

export const configureStore = () => {
    if (process.env.NODE_ENV === "production") {
        return createStore(
            rootReducer,
            applyMiddleware(thunk),
        );
    } else {
        return createStore(
            rootReducer,
            composeWithDevTools(
                applyMiddleware(thunk),
            ),
        );
    }
};
