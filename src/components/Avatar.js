import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { estilosAvatar } from './DesignNaSi';

export default function AvatarUser({ photoURL, displayName }) {
    return (
        <div>
            <picture>
                <Avatar src={photoURL}  />
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
