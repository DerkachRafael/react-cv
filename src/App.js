import React, {Component} from 'react';
import Sidebar from './components/sidebar/sidebar'
import './components/app.scss';
import PropTypes from 'prop-types';
import About from './components/about/about';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import base from './components/service/service';
import Education from "./components/education/education";

class App extends Component {

    state = {
        sidebarIsOpen: false,
        education: [],
        loading: true
    }


    constructor(props) {
        super(props);

    }

    componentWillMount() {
        // this runs right before the <App> is rendered
        // this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
        //     context: this,
        //     state: 'fishes'
        // });
        this.setState({
            loading: true,
        })
        base.syncState(`education`, {
            context: this,
            state: 'education',
            asArray: true
        });
        base.fetch('education', {
            context: this,
            asArray: true
        }).then(education => {
            this.setState({
                loading: false,
                education
            });
            console.log(this.state.education);
            const localStorageRef = localStorage.getItem(this.state.education);
            this.setState({
                loading: false
            })
            this.renderStorage(localStorageRef);
        }).catch(error => {
            console.log(error);
        })


    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(this.state.education, JSON.stringify(nextState.education));
        console.log(localStorage.setItem(this.state.education, JSON.stringify(nextState.education)));
    }


    renderStorage(localStorageRef) {
        // check if there is any order in localStorage

        if (localStorageRef) {
            // update our App component's order state
            this.setState({
                education: JSON.parse(localStorageRef)
            });
        }
    }

    scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    toggleSideBar = () => {
        console.log(this.state);
        this.setState({
            sidebarIsOpen: !this.state.sidebarIsOpen
        })
    };

    render() {
        const {sidebarIsOpen} = this.state;
        return (
            <div className="App">
                <Sidebar toggleSideBar={this.toggleSideBar}
                         positionBtn='right'
                         positionSidebar=""
                         sidebarIsOpen={sidebarIsOpen}/>

                <div className="container">
                    <About/>
                    <Education education={this.state.education} loading={this.state.loading} />
                </div>

                <button className="btn-toTop"
                        onClick={this.scrollToTop}>
                    <FaAngleUp size={30}/>
                </button>
            </div>
        );
    }
}

export default App;

