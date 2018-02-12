import React from 'react';
import str from 'prop-types';
import {Redirect} from 'react-router-dom';
import EducationView from './educationView';
import AboutView from "../about/aboutArticles";

import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import Loader from '../loader/spinner';
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
                    <div className="timeline__body">
                        <p>{education.description}</p>
                    </div>
                </div>
            </li>
        )
    };

    render() {
        console.log(this.props.education);
        const ShowLoader = this.props.loading && <Loader />;
        const ErrorMsg = <h3 className="error">Data not found :( check Your connect to internet</h3>;
        const educationList = this.props.education.length ? this.props.education.map(this.renderTimeLine) : ErrorMsg;
        const TimeLine = <ul className="timeline">{educationList}</ul>;
        return (
            <section id="education" className="section">
                <h2 className="title title-section">Education</h2>
                <div className="wrap-timeline">
                    {TimeLine }
                    {ShowLoader}
                </div>
            </section>
        )
    }
}
