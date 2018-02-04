import React, {Component} from 'react';
import Sidebar from './components/sidebar/sidebar'
import './components/app.scss';
import PropTypes from 'prop-types';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            default: true
        };

    }

    scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    }

    render() {

        return (
            <div className="App">
                <Sidebar/>
                <button className="btn" onClick={this.scrollToTop}>
                    Up
                </button>
            </div>
        );
    }
}

export default App;

