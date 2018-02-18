import React, {Component} from 'react';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import { func, bool } from 'prop-types';

BackToTopBtn.propTypes = {
    scrollToTop: func.isRequired,
    isVisible: bool
};

export default function BackToTopBtn(props) {
    return(
        <button className={`btn-toTop`}
                onClick={props.scrollToTop}>
            <FaAngleUp size={30} color="white" />
        </button>
    )
}
