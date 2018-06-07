import * as React from "react";
import { ListItem, Avatar, ListItemText, LinearProgress, withStyles } from "@material-ui/core";
import { path } from "ramda";
import { ICharacter } from "../reducers/characters";
import HitpointsBar from "./HPBar";

interface IInitiativeItemProps {
    character: ICharacter;
}

const characterThumb
    : (character: ICharacter) => string | undefined
    = path(["fields", "Inspirational images", 0, "thumbnails", "small", "url"])
;

const InitiativeItem = ({ character }: IInitiativeItemProps): JSX.Element =>
    <ListItem key={character.id} >
        <Avatar src={characterThumb(character)} />
        <ListItemText primary={character.fields.Name} />
        <HitpointsBar character={character} />
    </ListItem>
;

export default InitiativeItem;
