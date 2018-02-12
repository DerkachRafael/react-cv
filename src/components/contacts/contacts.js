import React from 'react';
import {contactsInfo} from './contactInfo';

Contacts.defaultProps = {
    contactsInfo
};

export default function Contacts({contactsInfo}) {
    const renderInfo = contactsInfo.map((contact, index) =>
        <li className="contacts__item" key={index}>
            <span className="contacts__ico">
                {contact.icon}
            </span>
            <div className="contacts__info">
                <h4 className="contacts__title title">
                    {contact.title}
                    <a href={contact.link}>
                        {contact.link}
                    </a>
                </h4>
            </div>
        </li>
    );
    return (
        <section id='contact' className="section">
            <h2 className="title-section">
                Contacts
            </h2>
            <ul className="contacts">
                {renderInfo}
            </ul>
        </section>
    )
}
