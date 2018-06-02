import { createStore, applyMiddleware, Dispatch } from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { initStoreAction } from "../actions/actions";
import { rootReducer } from "../reducers/rootReducer";

export interface IState {
    key: String;
}

export const initStore = () => {
    return (dispatch: Dispatch<{}>) => {
        return dispatch(initStoreAction());
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
