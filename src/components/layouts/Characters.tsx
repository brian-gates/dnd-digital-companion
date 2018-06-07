import * as React from "react";
import { ICharacter } from "../reducers/characters";
import { IState } from "../store/configStore";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { loadCharactersAction } from "../actions/characters";
import { Button, Card, Typography, CardContent } from "@material-ui/core";

interface IProps {
    characters: ICharacter[];
    loadCharacters: () => void;
}

const Character = (character: ICharacter): JSX.Element =>
    <Card key={character.id}>
        <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                {character.fields.Name}
            </Typography>
            <Typography component="p">
                {character.fields.Description}
            </Typography>
        </CardContent>
    </Card>
;

const Characters = ({ characters, loadCharacters }: IProps): JSX.Element =>
    <>
        <Button variant="raised" color="primary" onClick={loadCharacters}>Load Characters</Button>
        {characters.map(Character)}
    </>
;

const stateToProps = ({ characters }: IState) => ({ characters: characters.characters });
const dispatchToProps = (dispatch: Dispatch<{}>) => ({
    loadCharacters: () => dispatch(loadCharactersAction()),
});

export default connect(stateToProps, dispatchToProps)(Characters);
