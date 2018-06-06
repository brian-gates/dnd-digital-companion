import * as React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { route } from "./routes";
import { configureStore, initStore } from "./store/configStore";
import "typeface-roboto";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./pages/theme";

const store = configureStore();
store.dispatch(initStore());

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <HashRouter children={route} />
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
