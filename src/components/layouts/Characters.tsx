import * as React from "react";
import { ICharacter } from "../reducers/characters";
import { IState } from "../store/configStore";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { loadCharactersAction } from "../actions/characters";
import { Button } from "@material-ui/core";

interface IProps {
    characters: ICharacter[];
    loadCharacters: () => void;
}

const Characters = ({ characters, loadCharacters }: IProps): JSX.Element => {
    return <ul>
        <Button onClick={loadCharacters}>Load Characters</Button>
        {characters.map((character) => <li>{character.name}</li>)}
    </ul>;
};

const stateToProps = ({ characters }: IState) => ({ characters: characters.characters });
const dispatchToProps = (dispatch: Dispatch<{}>, getState: () => IState) => ({
    loadCharacters: () => loadCharactersAction(dispatch, getState),
});

export default connect(stateToProps, dispatchToProps)(Characters);
