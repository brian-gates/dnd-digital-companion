import * as React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { log } from "util";

class HomePage extends React.Component<{}, {}> {

    private keyChange(event: { target: { value: string; }; }) {
        log(event.target.value)
    } 

    public render(): JSX.Element {
        return (
            <>
                <Input
                    type="password"
                    onChange={this.keyChange}
                />
                <Button variant="raised" color="primary">
                    Hello World
                </Button>
            </>
        );
    }
}

export default HomePage;
