import React, {Component} from 'react';
import Sidebar from './components/sidebar/sidebar'
import './components/app.scss';
import PropTypes from 'prop-types';
import About from './components/about/about';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import base from './components/service/service';
import Education from "./components/education/education";
import ExperienceView from "./components/experiance/experienceView";
import BackToTopBtn from './components/backToTop/backToTop';
import Contact from './components/contacts/contacts';
import Feedback from './components/feedbacks/feedback';
import SkillsForm from './components/skills/skillsForm';

class App extends Component {

    state = {
        sidebarIsOpen: false,
        education: [],
        feedback: [],
        infoUser: [],
        skills: {},
        loading: true,
    };


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // this runs right before the <App> is rendered
        base.fetch('infoUser', {
            context: this,

        }).then(infoUser => this.updateEducation(infoUser))
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    }

    submitSkills = (skill) =>{
        const skills = {...this.state.skills};
        const timeStamp = Date.now();
        skills[`skill-${timeStamp}`] = skill;
        this.setState({
            skills
        });

    }

    updateEducation(infoUser) {
        this.setState({
            loading: false,
            asArray: true,
            education: infoUser.education,
            feedback: infoUser.feedback
        });
        const localStorageEducation = localStorage.getItem('education');
        const localStorageRefFeedback = localStorage.getItem('feedback');

        this.renderStorage.bind(localStorageEducation, localStorageRefFeedback);
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('education', JSON.stringify(nextState.education));
        localStorage.setItem('feedback', JSON.stringify(nextState.feedback));
    }


    renderStorage(localStorageEducation, localStorageRefFeedback) {
        // check localStorage

        localStorageEducation || localStorageRefFeedback && this.setState({
            education: JSON.parse(localStorageEducation),
            feedback: JSON.parse(localStorageRefFeedback)
        });
    }

    scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    toggleSideBar = () => {
        this.setState(prevState => ({sidebarIsOpen: !prevState.sidebarIsOpen}))
    };


    render() {
        const {sidebarIsOpen} = this.state;
        return (
            <div className="App">
                <Sidebar toggleSideBar={this.toggleSideBar}
                         positionBtn='right'
                         positionSidebar=""
                         sidebarIsOpen={sidebarIsOpen}/>

                <div className={`container ${sidebarIsOpen ? 'container--slideIn' : ''}`}>
                    <About/>

                    <Education education={this.state.education}
                               loading={this.state.loading}/>
                    <ExperienceView/>
                        <SkillsForm submitSkills={this.submitSkills} skills={this.state.skills} />
                    <Contact />
                    <Feedback feedback={this.state.feedback}/>
                </div>
                <BackToTopBtn scrollToTop={this.scrollToTop}/>
            </div>
        );
    }
}

export default App;

