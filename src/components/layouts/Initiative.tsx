import * as React from "react";
import { ICharacter } from "../reducers/characters";
import { IState } from "../store/configStore";
import { loadCharactersAction } from "../actions/characters";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

interface IInitiativeItemProps {
    character: ICharacter;
}

const InitiativeItem = ({ character }: IInitiativeItemProps): JSX.Element =>
    <>{character.fields.Name}</>
;

interface IInitiativeProps {
    characters: ICharacter[];
}

const Initiative = ({ characters  }: IInitiativeProps): JSX.Element =>
    <>
        <Typography variant="headline">Initiative</Typography>
        {characters.map((character) =>
            <InitiativeItem character={character} />,
        )}
    </>
;

const stateToProps = ({ characters }: IState) => ({ characters: characters.characters });
const dispatchToProps = (dispatch: Dispatch<{}>) => ({
    loadCharacters: () => dispatch(loadCharactersAction()),
});

export default connect(stateToProps, dispatchToProps)(Initiative);
