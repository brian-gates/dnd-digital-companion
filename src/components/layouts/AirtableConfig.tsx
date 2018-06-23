import * as React from "react";
import { TextField, Typography, Paper, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { IState } from "../store/configStore";
import { pipe } from "ramda";
import { Dispatch } from "redux";
import { updateKey, updateBaseId } from "../actions/airtable";
import AirtableConfigTest from "./AirtableConfigTest";
import { IAirtableConfig } from "../reducers/airtable";

interface Props {
    config: IAirtableConfig;
    onApiKeyChanged: (value: string) => void;
    onBaseIdChanged: (value: string) => void;
    classes: {
        root: string;
    };
}
const eventToTargetValue = (event: React.ChangeEvent<HTMLInputElement>) => event.target.value;

const styles = (theme) => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

const AirtableConfig = ({
    config,
    onApiKeyChanged,
    onBaseIdChanged,
    classes,
}: Props): JSX.Element =>
    <form>
        <Paper className={classes.root}>
            <Typography gutterBottom variant="title" component="h2">Airtable Configuration</Typography>
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
        </Paper>
        <Paper className={classes.root}>
            <AirtableConfigTest />
        </Paper>
    </form>;

const stateToProps = ({ airtable: { config } }: IState) => ({ config });

const dispatchToProps = (dispatch: Dispatch<{}>) => ({
    onApiKeyChanged: (value: string) => dispatch(updateKey(value)),
    onBaseIdChanged: (value: string) => dispatch(updateBaseId(value)),
});

export default withStyles(styles)(connect(stateToProps, dispatchToProps)(AirtableConfig));
