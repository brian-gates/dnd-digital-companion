import * as React from "react";
import AirtableConfig from "../layouts/AirtableConfig";
import Characters from "../layouts/Characters";

class HomePage extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <>
                <AirtableConfig />
                <Characters />
            </>
        );
    }

}

export default HomePage;
