import * as React from "react";
import AirtableConfig from "../layouts/AirtableConfig";
import { IAirtableConfig } from "../actions/actionTypes";
import { IState } from "../store/configStore";
import { connect } from "react-redux";

class HomePage extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <>
                <AirtableConfig />
            </>
        );
    }

}

export default HomePage;
