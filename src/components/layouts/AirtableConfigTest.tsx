import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../store/configStore";
import { Dispatch } from "redux";
import { testAirtable } from "../actions/airtableActions";
import { IAirtableConfig, IAirtableConfigTest, ConfigStatus } from "../reducers/airtable";
import { Button, Typography } from "@material-ui/core";

interface Props {
    config: IAirtableConfig;
    test: IAirtableConfigTest;
    startTest: () => void;
}

const AirtableConfigTest = ({
    config: { apiKey, baseId },
    test: { status, error },
    startTest,
}: Props): JSX.Element => {
    if (ConfigStatus.Untested === status) {
        startTest();
    }
    return <>
        <Typography gutterBottom variant="title" component="h2">Airtable Configuration Test</Typography>
        <Button variant="raised" color="primary" onClick={startTest}>
            Test
        </Button>
        {ConfigStatus.Testing === status && <p>Testing...</p>}
        {ConfigStatus.Invalid === status && <p>Failed with error: {String(error)}</p>}
        {ConfigStatus.Valid === status && <p>Success!</p>}
    </>;
};

const mapStateToProps = ({ airtable: { config, test } }: IState) =>
    ({ config, test });

const mapDispatchToProps = (dispatch: Dispatch<Promise<void>>) => ({
    startTest: () => dispatch(testAirtable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AirtableConfigTest);
