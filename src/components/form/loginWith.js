import React, {Component}  from 'react';
export default class LoginLinks extends  Component{
   render() {
       return (
           <div>
               <button className="github"
                       onClick={() => this.props.authenticate.bind(this, 'github')}>
                   Log In with Github
               </button>
               <button className="facebook"
                       onClick={() => this.props.authenticate.bind(this, 'facebook')}>
                   Log In with Facebook
               </button>
               <button className="twitter"
                       onClick={() => this.props.authenticate.bind(this, 'twitter')}>
                   Log In with Twitter
               </button>
           </div>
       )
   }
}
