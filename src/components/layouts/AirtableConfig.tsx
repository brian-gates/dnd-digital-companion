import * as React from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { IState } from "../store/configStore";
import { pipe } from "ramda";
import { Dispatch } from "redux";
import { updateKey, updateBaseId } from "../actions/airtableActions";
import AirtableConfigTest from "./AirtableConfigTest";
import { IAirtableConfig } from "../reducers/airtable";

interface Props {
    config: IAirtableConfig;
    onApiKeyChanged: (value: string) => void;
    onBaseIdChanged: (value: string) => void;
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
            type="password"
            onChange={pipe(eventToTargetValue, onApiKeyChanged)}
        />
        <TextField
            label="Base ID"
            value={config.baseId}
            onChange={pipe(eventToTargetValue, onBaseIdChanged)}
        />
        <AirtableConfigTest />
    </form>;

const stateToProps = ({ airtable: { config } }: IState) => ({ config });

const dispatchToProps = (dispatch: Dispatch<{}>) => ({
    onApiKeyChanged: (value: string) => dispatch(updateKey(value)),
    onBaseIdChanged: (value: string) => dispatch(updateBaseId(value)),
});

export default connect(stateToProps, dispatchToProps)(AirtableConfig);
