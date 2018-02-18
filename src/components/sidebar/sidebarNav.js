import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function MenuItems(props) {
    const menuItems = props.menu.map((val, index) =>
        <li className="sidebar__item" key={index}>
            <AnchorLink className="sidebar__link"

                        href={`#${val.hash}`}>
                {val.icon}
                {val.title}
            </AnchorLink>
        </li>
    );
    return (menuItems);
}