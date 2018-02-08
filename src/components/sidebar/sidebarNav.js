//import  toCamelCase  from '30-seconds-of-code';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { func, bool } from 'prop-types';

export default function MenuItem(props) {
    const menuItems = props.menu.map((val, index) => {
        return (
            <li className="sidebar__item" key={index}>
                <Link className="sidebar__link"
                      to={{
                          // pathname: val.hash,
                          hash: val.hash,
                      }}>
                    {val.icon}
                    {val.title}
                </Link>
            </li>
        )
    });
    return menuItems;
}
