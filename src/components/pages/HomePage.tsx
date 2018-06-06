import * as React from "react";
import AirtableConfig from "../layouts/AirtableConfig";
import Characters from "../layouts/Characters";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Initiative from "../layouts/Initiative";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const HomePage = ({ classes }: object): JSX.Element =>
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className={classes.flex}>
                    Welcome
                </Typography>
            </Toolbar>
        </AppBar>
        <CssBaseline />
        <AirtableConfig />
        <Initiative />
        <Characters />
    </div>
;

export default withStyles(styles)(HomePage);
