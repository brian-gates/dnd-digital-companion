import * as React from "react";
import AirtableConfig from "../layouts/AirtableConfig";
import Characters from "../layouts/Characters";
import CssBaseline from "@material-ui/core/CssBaseline";

class HomePage extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <>
                <CssBaseline />
                <AirtableConfig />
                <Characters />
            </>
        );
    }

}

export default HomePage;
