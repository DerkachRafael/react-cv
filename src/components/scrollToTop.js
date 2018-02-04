import {Component} from "react";

class ScrollLink extends Component {
    scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    }
    render () {
        return (
                <button className="btn" onClick={this.scrollToTop}>
                    Up
                </button>
        );
    }
};
