import React from 'react';
import FeedbackList from './feedbackList';

export default function Feedback(props) {
    const renderFeedback = props.feedback
        .map((feedback, index) => <FeedbackList feedback={feedback} index={index}/>);
    return (
        <section id='feedback' className="section">
            <h2 className="title-section">
                Feedback
            </h2>
            <ul className="feedback">
                {renderFeedback}
            </ul>
        </section>
    )
}
