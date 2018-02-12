import React, {Component} from 'react';
//IMPORT ICONS
import FaUser from 'react-icons/lib/fa/user';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import FaLocationArrow from 'react-icons/lib/fa/location-arrow';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaDiamond from 'react-icons/lib/fa/diamond';
import FaSuitcase from 'react-icons/lib/fa/suitcase';
import FaComment from 'react-icons/lib/fa/comment';

export const styleIcon = {
    size: 26,
    color: 'inherit'
};
export const menu = [
    {
        title: 'About me',
        hash: 'aboutMe',
        icon: <FaUser {...styleIcon}/>
    },
    {
        title: 'Education',
        hash: 'education',
        icon: <FaGraduationCap {...styleIcon}/>
    },
    {
        title: 'Experience',
        hash: 'experience',
        icon: <FaPencil {...styleIcon}/>
    },
    {
        title: 'Portfolio',
        hash: 'portfolio',
        icon: <FaSuitcase {...styleIcon}/>
    },
    {
        title: 'Skills',
        hash: 'skills',
        icon: <FaDiamond {...styleIcon}/>
    },
    {
        title: 'Feedback',
        hash: 'feedback',
        icon: <FaComment {...styleIcon}/>
    },
    {
        title: 'Contact',
        hash: 'contact',
        icon: <FaLocationArrow {...styleIcon}/>
    }
];
