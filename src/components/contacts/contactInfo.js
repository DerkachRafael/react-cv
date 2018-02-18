import React from 'react';

import FaPhone from  'react-icons/lib/fa/phone';
import FaEnvelopeO from  'react-icons/lib/fa/envelope-o';
import FaTwitter from  'react-icons/lib/fa/twitter';
import FaFacebook from  'react-icons/lib/fa/facebook';
import FaSkype from  'react-icons/lib/fa/skype';

const styleIcon = {
    size: 27,
    color: '#26c17e'
};

export const contactsInfo = [
    {
        title: '500 345 242',
        icon: <FaPhone {...styleIcon}/>
    },
    {
        title: 'office@kamsolutions.pl',
        icon: <FaEnvelopeO {...styleIcon}/>
    },
    {
        title: 'Twitter',
        link: 'https://twitter.com/WordPress',
        icon: <FaTwitter {...styleIcon}/>
    },
    {
        title: 'Facebook',
        link: 'https://www.facebook.com/facebook',
        icon: <FaFacebook {...styleIcon}/>
    },
    {
        title: 'Skype',
        link: 'kamsolutions.pl',
        icon: <FaSkype {...styleIcon}/>
    },
];