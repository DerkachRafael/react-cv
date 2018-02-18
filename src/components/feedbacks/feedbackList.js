import React from 'react';

const FeedbackList = (props) => {
    return (
        <li className="feedback__item" key={props.feedback.index}>
            <img className="feedback__photo"
                 src={props.feedback.img} alt="user"/>
            <blockquote className="feedback__blockquote">
                <q>
                    {props.feedback.description}
                </q>
            </blockquote>
            <cite className="feedback__cite">
                {props.feedback.from}
                <a href="#0"
                   className="feedback__link feedback__link--accent">
                    {props.feedback.link}
                    </a>
            </cite>

        </li>
    )
};

export default FeedbackList;