import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from './sidebarNav';
import Avatar from './avatar'
//IMPORT ICONS
import FaUser from 'react-icons/lib/fa/user';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import FaLocationArrow from 'react-icons/lib/fa/location-arrow';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaDiamond from 'react-icons/lib/fa/diamond';
import FaSuitcase from 'react-icons/lib/fa/suitcase';
import FaComment from 'react-icons/lib/fa/comment';


export default class Sidebar extends Component {

    state = {
        userImg: '',
        userName: ''
    }

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
        // const sizeIcon = 25;
        const styleIcon = {
            size: 26,
            color: '#fff'
        }
        const menu = [
            {
                title: 'About me',
                hash: 'aboutMe',
                icon: <FaUser {...styleIcon}/>
            },
            {
                title: 'Education',
                hash: 'education',
                icon: <FaGraduationCap {...styleIcon}/>
            },
            {
                title: 'Experience',
                hash: 'experience',
                icon: <FaPencil {...styleIcon}/>
            },
            {
                title: 'Portfolio',
                hash: 'portfolio',
                icon: <FaSuitcase {...styleIcon}/>
            },
            {
                title: 'Skills',
                hash: 'skills',
                icon: <FaDiamond {...styleIcon}/>
            },
            {
                title: 'Feedback',
                hash: 'feedback',
                icon: <FaComment {...styleIcon}/>
            },
            {
                title: 'Contact',
                hash: 'contact',
                icon: <FaLocationArrow {...styleIcon}/>
            }
        ];

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
                            <MenuItem menu={menu}/>
                        </ul>
                    </div>
                }
            </div>
        )
    }
                }
