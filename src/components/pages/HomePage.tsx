import * as React from "react";
import AirtableConfig from "../layouts/AirtableConfig";
import { IAirtableConfig } from "../actions/actionTypes";

class HomePage extends React.Component<{}, {}> {

    public render(): JSX.Element {
        const airtableConfig = { apiKey: "2", baseId: "3" };
        return (
            <>
                <AirtableConfig
                    config={airtableConfig}
                    onSave={(config: IAirtableConfig) => console.log(config)}
                />
            </>
        );
    }

}

export default HomePage;
