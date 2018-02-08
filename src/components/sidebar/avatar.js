import React from 'react';



export default function Avatar(props) {
    const userName = props.userName;
    const img = props.userImg;
    return (
        <figure className="avatar">
            <img className="avatar__img" src={img} alt=""/>
            <figcaption>
                <h4 className="avatar__title">
                    {userName}
                </h4>
            </figcaption>
        </figure>
    )
}
