import React from 'react';
import {experienceInfo} from './experience';
import {arr} from 'prop-types'


ExperienceView.defaultProps = {
    experienceInfo
};
export default function ExperienceView({experienceInfo}) {
    const renderInfo = experienceInfo.map((experience, index) =>
        <div className="experience__row" key={index}>
            <div className="experience__left">
                <h4 className="title">
                    {experience.company}
                </h4>
                <p className="experience__date">
                    {experience.date}
                </p>
            </div>
            <div className="experience__right">
                <h4 className="experience__title title">
                    {experience.jobTitle}
                </h4>
                <p className="experience__description">
                    {experience.description}
                </p>
            </div>
        </div>);
    return (
        <section id='experience' className="experience">
            <h2 className="title-section">Experience</h2>
                {renderInfo}
        </section>
    )
}
