import React from 'react';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RainbowApplication from 'react-rainbow-components/components/Application';
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import Badge from './pages/Badge';
import Button from './pages/Button';
import ButtonGroup from './pages/ButtonGroup';
import ButtonIcon from './pages/ButtonIcon';
import ButtonMenu from './pages/ButtonMenu';
import Card from './pages/Card';
import Input from './pages/Input';
import ProgressBar from './pages/ProgressBar';
import Spinner from './pages/Spinner';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import ReduxForm from './pages/ReduxForm';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <RainbowApplication>
                    <Route exact path="/" component={Home} />
                    <Route path="/avatar" component={Avatar} />
                    <Route path="/badge" component={Badge} />
                    <Route path="/button" component={Button} />
                    <Route path="/button-group" component={ButtonGroup} />
                    <Route path="/button-icon" component={ButtonIcon} />
                    <Route path="/button-menu" component={ButtonMenu} />
                    <Route path="/card" component={Card} />
                    <Route path="/input" component={Input} />
                    <Route path="/progress-bar" component={ProgressBar} />
                    <Route path="/spinner" component={Spinner} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/redux-form" component={ReduxForm} />
                </RainbowApplication>
            </Router>
        </Provider>
    );
}
