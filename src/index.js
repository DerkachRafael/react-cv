import React from 'react';
import ReactDOM from 'react-dom';
import './components/app.css';
import App from './App';
import Form from './components/form/login';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Switch, Route, Miss} from 'react-router-dom';


const NoMatch = () => {
    return (
        <h2>
            ERROR
        </h2>
    )
}

const Root = () => {
    return (
        <Router location="history">
            <div>
                <Switch>
                    <Route exact path="/" component={Form}/>
                    <Route path="/user/:userId" component={App} className="tes"/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(
    <Root/>
    , document.getElementById('root'));
registerServiceWorker();
