import * as React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { log } from "util";
import { IAirtableConfig } from "../actions/actionTypes";
import { configureAirtableAction } from "../actions/actions";
import { loadCharacters } from '../store/configStore';

class HomePage extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <>
                <Input onChange={this.bindEventState("apiKey")} />
                <Input onChange={this.bindEventState("baseId")} />
                <Button variant="raised" color="primary" onClick={() => this.loadCharacters()}>
                    Load Characters
                </Button>
            </>
        );
    }

    private bindEventState(key: string) {
        return (event: { target: { value: string; }; }) => {
            this.setState({ [key]: event.target.value });
        };
    }

    private loadCharacters() {
        loadCharacters();
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
    }

}

export default HomePage;
