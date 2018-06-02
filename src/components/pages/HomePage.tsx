import * as React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { log } from "util";
import Airtable from "airtable";


class HomePage extends React.Component<{}, {}> {

    private eventTargetToStateKey(key: string) {
        return (event: { target: { value: string; }; }) {
            this.setState({ [key]: event.target.value })
        }
    }

    private loadCharacters() {
        const { apiKey, base } = this.state;
        log({ apiKey, base })
        const base = new Airtable({ apiKey }).base(base);
        base('Characters').select({
            sort: [
                { field: 'Name', direction: 'asc' }
            ]
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function (record) {
                console.log('Retrieved ', record.get('Name'));
            });
            fetchNextPage();
        }, function done(error: Error) {
            console.log(error);
        });
    }

    public render(): JSX.Element {
        return (
            <>
                <Input onChange={this.eventTargetToStateKey('apiKey')} />
                <Input onChange={this.eventTargetToStateKey('base')} />
                <Button variant="raised" color="primary" onClick={() => this.loadCharacters()}>
                    Load Characters
                </Button>
            </>
        );
    }
}

export default HomePage;
