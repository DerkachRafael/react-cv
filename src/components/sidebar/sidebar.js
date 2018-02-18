import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {styleIcon, menu} from './defaultMenu';
import MenuItems from './sidebarNav';
import Avatar from './avatar'


export default class Sidebar extends Component {

    state = {
        userImg: '',
        userName: ''
    };

    componentDidMount() {
        const url = 'https://randomuser.me/api/?gender=male';
        fetch(url).then(response => response.json())
            .then(res => {
                const userName = `${res.results[0].name.first} ${res.results[0].name.last}`;
                const userImg = res.results[0].picture.medium;

                this.setState({
                    userName,
                    userImg
                })
            })
    }

    render() {
        return (
            <div>
                <button type="button"
                        className={`btn-hamb btn-sidebar--${this.props.positionBtn}
                       ${this.props.sidebarIsOpen ? 'btn-hamb--open' : 'btn-hamb--hide'}`}
                        onClick={this.props.toggleSideBar}>
                    <span className="btn-hamb__line btn-hamb__line--half btn-hamb__line--start">
                    </span>
                    <span className="btn-hamb__line">
                    </span>
                    <span className="btn-hamb__line btn-hamb__line--half btn-hamb__line--end">
                    </span>
                </button>
                {
                    <div className={`sidebar ${this.props.sidebarIsOpen ? 'sidebar--open' : 'sidebar--hide'}`}>
                        <ul className="sidebar__list">
                            <Avatar userName={this.state.userName} userImg={this.state.userImg}/>
                            <MenuItems menu={menu}/>
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
