import * as React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { IAirtableConfig } from "../actions/actionTypes";

interface Props {
    config: IAirtableConfig;
    onSave: (config: IAirtableConfig) => void;
}

interface State {
    config: IAirtableConfig;
}

class AirtableConfig extends React.Component<{}, {}> {

    public props: Props;
    public state: State = {
        config: {
            apiKey: "",
            baseId: "",
        },
    };

    protected constructor(props: Props) {
        super(props);
        const { apiKey = "", baseId = "" } = props.config;
        this.state.config = { apiKey, baseId };
    }

    public render(): JSX.Element {
        return (
            <form>
                <h1>Airtable Configuration</h1>
                <TextField
                    label="API Key"
                    value={this.state.config.apiKey}
                    onChange={this.bindEventTargetValueToStateKey("apiKey")}
                />
                <TextField
                    label="Base ID"
                    value={this.state.config.baseId}
                    onChange={this.bindEventTargetValueToStateKey("baseId")}
                />
                <Button
                    variant="raised"
                    color="primary"
                    onClick={this.onSave}
                >
                    Save
                </Button>
            </form>
        );
    }

    protected onSave = () => this.props.onSave(this.state.config);

    private bindEventTargetValueToStateKey(stateKey: string) {
        return (event: { target: { value: string; }; }) => {
            this.setState({ [stateKey]: event.target.value });
        };
    }

}

export default AirtableConfig;
