import React from 'react';
import str from 'prop-types';
import {Redirect} from 'react-router-dom';
import EducationView from './educationView';
import AboutView from "../about/aboutArticles";

import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';

export default class Education extends React.Component {

    static defaultProps = {
        title: 'Education',
    };


    renderTimeLine = (education, index) => {
        const loading = <div> Load... </div>;
        return (
                <li className="timeline__item" key={index}>

                    <div className="timeline__ico">
                        <FaGraduationCap size={25} color="#fff"/>
                    </div>
                    <div className="timeline__content">
                        <h3 className="timeline__header">
                            <h3>{education.title} Company</h3>
                            <p>{education.year} Company</p>
                        </h3>
                        <div className="body">
                            <p>{education.description}</p>
                        </div>
                    </div>
                </li>
        )
    };

    render() {
        return (
            <section id="edication">
                <h2 className="title title-section">Education</h2>
                <div className="wrap-timeline">
                    <ul className="timeline">
                        {this.props.education.map(this.renderTimeLine)}
                    </ul>
                </div>
            </section>


        )
    }
}
