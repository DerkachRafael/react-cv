import React from 'react';
import { bool } from 'prop-types';
//import LoginLinks from './loginWith';
import {Redirect} from 'react-router-dom';
import base from '../service/service';

export default class Form extends React.Component {

    static propTypes = {
        showPassword: bool
    };

    static defaultProps = {
        showPassword: false,
        uid: null,
        owner: null
    };

    state = {
        showPassword: this.props.showPassword,
        uid: null,
        owner: null
    };

    constructor(props) {
        super(props);
        this.authenticate = this.authenticate.bind(this);
        this.authHandler = this.authHandler.bind(this);

    }

    goToCv(e) {
        e.preventDefault();
        const userName = this.userEmail.value
            .split("@", 1)
            .join('')
            .replace('.', '-');
        this.form.reset();

        this.props.history.push(`/user/${userName}`);

    }

    togglePswd = () =>{
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    authenticate(provider) {
        console.log(`Trying to log in with ${provider}`);
        base.authWithOAuthPopup(provider, this.authHandler);

    }

    authHandler(err, authData) {
        console.log(authData);
        if (err) {
            console.error(err);
            return;
        }


        const storeRef = base.database().ref(this.props.storeId);


        storeRef.once('value', (snapshot) => {
            const data = snapshot.val() || {};


            if (!data.owner) {
                storeRef.set({
                    owner: authData.user.uid
                });
            }

            this.setState({
                uid: authData.user.uid,
                owner: data.owner || authData.user.uid
            });
        });
        console.log(authData.user.ze.photoURL);
        this.props.history.push(`/user/${authData.user.displayName}`);

    }

    render() {
        const togglePasswordTxt = this.state.showPassword ? 'Hide' : 'Show';

        return (
            <div>
                <form className="form"
                      onSubmit={(e) => this.goToCv(e)}
                      ref={form => this.form = form}>
                    <div className="form__group">
                        <input className="form__input input"
                               type="text"
                               placeholder="Your name"
                               ref={inputEmail => this.userEmail = inputEmail}/>
                    </div>
                    <div className="form__group">
                        <label className="form__label label-password"
                               htmlFor="passwordUser"
                               onClick={this.togglePswd}>
                            {togglePasswordTxt}
                        </label>
                        <input className="form__input input"
                               type={this.state.showPassword ? 'text' : 'password'}
                               name="passwordUser"
                               placeholder="Your password"
                               maxLength={20}
                               ref={inputPassword => this.userPassword = inputPassword}/>
                    </div>

                    <button className="form__btn btn--primary"
                            type="submit">
                        Go! →
                    </button>
                </form>

                  <div>
                      <button className="facebook"
                              onClick={() => this.authenticate('facebook')}>
                          Log In with Facebook
                      </button>
                  </div>

            </div>
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
