import * as React from "react";
import { ICharacter } from "../reducers/characters";
import { LinearProgress, withStyles, Typography } from "@material-ui/core";

const hpPercent = (character: ICharacter) => {
    if (character.fields["Current Hitpoints"] === undefined) {
        return 100;
    }
    if (character.fields["Max HP"] === undefined) {
        return undefined;
    }
    return 100 * character.fields["Current Hitpoints"] / character.fields["Max HP"];
};

const styles = {
    root: {
        flexGrow: 1,
        maxWidth: "25%",
    },
};

interface IHitpointsBar {
    character: ICharacter;
    classes: {
        root: string;
    };
}
const HitpointsBar = ({ character, classes }: IHitpointsBar): JSX.Element =>
    <div className={classes.root}>
        {hpPercent(character) && <LinearProgress variant="determinate" value={hpPercent(character)} />}
        {character.fields["Max HP"] === undefined &&
            <Typography>Max HP is missing.</Typography>
        }
    </div>
;

export default withStyles(styles)(HitpointsBar);
