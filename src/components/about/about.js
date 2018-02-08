import React from 'react';
import {bool} from 'prop-types';
import {Redirect} from 'react-router-dom';
import AboutView from './aboutArticles';

export default class About extends React.Component {

    static defaultProps ={
        title: 'About me'
    };

    render(){
        return (
            <AboutView title={this.props.title} />
        )
    }
}
