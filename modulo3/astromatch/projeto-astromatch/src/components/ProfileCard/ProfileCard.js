import React from "react";
import {
    Card,
    NameAndAge
} from './styled'

export default function ProfileCard(props) {

    return (
        <Card key={props.profile.id}>
            {props.profile.photo && <img src={props.profile.photo} alt={props.profile.name} />}
            <NameAndAge>
                <div>
                    {props.profile.name}
                </div>
                <div>
                    {props.profile.age}
                </div>
            </NameAndAge>
            <p>{props.profile.bio}</p>
        </Card>
    )
}