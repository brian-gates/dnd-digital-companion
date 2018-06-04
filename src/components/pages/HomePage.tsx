import * as React from "react";
import AirtableConfig from "../layouts/AirtableConfig";

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
