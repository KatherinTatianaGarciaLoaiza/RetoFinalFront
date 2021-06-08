import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export default function AvatarUser({ photoURL, displayName }) {
    return (
        <div>
            <picture>
                <Link to={`/ProfileUser`}>
                <Avatar src={photoURL}/></Link>
                {nombre(displayName)}
            </picture>
        </div>

    );
}

const nombre = (name) =>{
    let nombres;
    nombres=name.split(" ")
    return nombres[0];
}
