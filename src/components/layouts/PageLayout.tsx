import * as React from "react";
import { Redirect } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "../routes";
import "./PageLayout.less";
import Button from '@material-ui/core/Button';

const PageLayout: React.StatelessComponent<{}> = () => {
    return (
        <>
            <Redirect to="/home" />
            {renderRoutes(routes)}
        </>
    );
};

export default PageLayout;
