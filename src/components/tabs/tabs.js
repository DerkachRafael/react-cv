import React, {Component}  from 'react';
import tabsData from './tabsData';



class Tab extends React.Component {
    handleClick = (e) => {
        const { setCurrentTab, index } = this.props;
        setCurrentTab(index);
    }

    render() {
        const { text, isSelected } = this.props;
        return (
            <li
                className={`tabs__item ${isSelected ? ' tabs__item--active' : ''}`}
                onClick={this.handleClick}>
                <button type="button" className="tabs__btn">
                    {text}
                </button>
            </li>
        );
    }
}

const TabPanel = ({ content }) =>
    <div className="tabs__content">
        <div className="tabs__box">
            {content}
        </div>
    </div>;