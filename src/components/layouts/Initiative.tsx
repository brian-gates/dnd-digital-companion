import * as React from "react";
import { ICharacter } from "../reducers/characters";
import { IState } from "../store/configStore";
import { loadCharactersAction } from "../actions/characters";
import { connect } from "react-redux";
import { Typography, Button, ListItem, List, ListItemText, Avatar, LinearProgress } from "@material-ui/core";
import InitiativeItem from "./InitiativeItem";

interface IInitiativeProps {
    characters: ICharacter[];
    loadCharacters: () => void;
}

const Initiative = ({ characters, loadCharacters }: IInitiativeProps): JSX.Element =>
    <List>
        <Typography variant="headline">Initiative</Typography>
        <Button variant="raised" color="primary" onClick={loadCharacters}>Load Characters</Button>
        {characters.map((character) =>
            <InitiativeItem key={character.id} character={character} />,
        )}
    </List>
;

const stateToProps = ({ characters }: IState) => ({ characters: characters.characters });
const dispatchToProps = (dispatch: Dispatch<{}>) => ({
    loadCharacters: () => dispatch(loadCharactersAction()),
});

export default connect(stateToProps, dispatchToProps)(Initiative);
