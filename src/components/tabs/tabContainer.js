import React, {Component}  from 'react';
import tabsData from './tabsData';

class TabContainer extends React.Component {
    constructor(props) {
        super(props);

        // Set initial state
        this.state = {
            currentTab: this.props.defaultTab,
        };

        // Dummy data
        this._tabData = tabsData;
    }

    _setCurrentTab(currentTab) {
        // Don't re-render if current tab is clicked again
        if (this.state.currentTab === currentTab) {
            return;
        }
        this.setState({ currentTab });
    }

    _renderTabs() {
        // Map data to Tab component.
        // Pass index down so we can send it up to this.state later.
        return (
            <ul className="Tabs">
                {
                    this._tabData.map((tab, index) => {
                        return (
                            <Tab
                                index={index}
                                text={tab.name}
                                isSelected={this.state.currentTab === index}
                                setCurrentTab={this._setCurrentTab.bind(this)}
                            />
                        )
                    })
                }
            </ul>
        );
    }

    _renderTabPanel() {
        // Map data to TabPanel component
        return this._tabData.map((tab, index) => {
            if (this.state.currentTab === index) {
                return (
                    <TabPanel
                        content={tab.content} />
                );
            }
        });
    }

    render() {
        const Tabs = this._renderTabs();
        const TabPanel = this._renderTabPanel();
        return (
            <div className="TabContainer">
                {Tabs}
                {TabPanel}
            </div>
        );
    }
}