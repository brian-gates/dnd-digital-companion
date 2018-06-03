import * as React from "react";
import { TextField } from "@material-ui/core";
import { IAirtableConfig } from "../actions/actionTypes";
import { connect } from "react-redux";
import { IState } from "../store/configStore";
import { pipe, tap, compose } from "ramda";
import { Dispatch } from "redux";
import { updateKey, updateBaseId } from "../actions/airtableActions";

const log = console.log.bind(console);

interface Props {
    config: IAirtableConfig;
    onApiKeyChanged: (key: string) => void;
    onBaseIdChanged: (baseId: string) => void;
}
const eventToTargetValue = (event: React.ChangeEvent<HTMLInputElement>) => event.target.value;

const AirtableConfig = ({
    config,
    onApiKeyChanged,
    onBaseIdChanged,
}: Props): JSX.Element =>
    <form>
        <h1>Airtable Configuration</h1>
        <TextField
            label="API Key"
            value={config.apiKey}
            onChange={pipe(eventToTargetValue, onApiKeyChanged)}
        />
        <TextField
            label="Base ID"
            value={config.baseId}
            onChange={pipe(eventToTargetValue, onBaseIdChanged)}
        />
    </form>;

const mapStateToProps = ({ app }: { app: IState}) => ({
    config: app.airtableConfig,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onApiKeyChanged: compose(dispatch, updateKey),
    onBaseIdChanged: compose(dispatch, updateBaseId),
});

export default connect(mapStateToProps, mapDispatchToProps)(AirtableConfig);
