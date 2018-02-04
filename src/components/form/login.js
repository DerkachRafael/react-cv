import React from 'react';
import {bool} from 'prop-types';

import {Redirect} from 'react-router-dom';

export default class Form extends React.Component {

    static propTypes = {
        showPassword: bool.isRequired
    }

    static defaultProps = {
        showPassword: false
    }

    state = {
        showPassword: this.props.showPassword,
    };

    goToCv(e) {
        e.preventDefault();
        const userName = this.userEmail.value
            .split("@", 1)
            .join('')
            .replace('.', '-');
        this.form.reset();
        console.log(this);
        console.log(this.context);
        // this.context.router.transitionTo(`/user/${userName}`);

        this.props.history.push(`/user/${userName}`);

    }

    togglePswd = () => {
        console.log(this.userPassword);
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {
        const togglePassword = this.state.showPassword ? 'Hide' : 'Show';

        return (
            <form className="form"
                  onSubmit={(e) => this.goToCv(e)}
                  ref={(form) => this.form = form}>
                <div className="form__group">
                    <input className="form__input input"
                           type="text"
                           placeholder="Your name"
                           ref={(inputEmail) => this.userEmail = inputEmail}/>
                </div>
                <div className="form__group">
                    <label className="form__label label-password"
                           htmlFor="passwordUser"
                           onClick={this.togglePswd}>
                        {togglePassword}
                    </label>
                    <input className="form__input input"
                           type={this.state.showPassword ? 'text' : 'password'}
                           name="passwordUser"
                           placeholder="Your password"
                           maxLength={20}
                           ref={(inputPassword) => this.userPassword = inputPassword}/>
                </div>

                <button className="form__btn btn--primary"
                        type="submit">
                    Go! →
                </button>
            </form>
        )
    }
}

/*Form.defaultProps = {
    showPassword: false
};

Form.propTypes = {
    showPassword: PropTypes.bool.isRequired,
};

// Form.contextTypes = {
//     router: PropTypes.object
// }
*/
