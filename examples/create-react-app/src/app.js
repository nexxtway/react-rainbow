import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LightningApplication from 'react-slds/components/Application';
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import Badge from './pages/Badge';
import Breadcrumbs from './pages/Breadcrumbs';
import Button from './pages/Button';
import ButtonGroup from './pages/ButtonGroup';
import ButtonIcon from './pages/ButtonIcon';
import ButtonMenu from './pages/ButtonMenu';
import Card from './pages/Card';
import Icon from './pages/Icon';
import Input from './pages/Input';
import ProgressBar from './pages/ProgressBar';
import Spinner from './pages/Spinner';

export default function App() {
    return (
        <Router>
            <LightningApplication assetsSrc="/assets">
                <Route exact path="/" component={Home} />
                <Route path="/avatar" component={Avatar} />
                <Route path="/badge" component={Badge} />
                <Route path="/breadcrumbs" component={Breadcrumbs} />
                <Route path="/button" component={Button} />
                <Route path="/button-group" component={ButtonGroup} />
                <Route path="/button-icon" component={ButtonIcon} />
                <Route path="/button-menu" component={ButtonMenu} />
                <Route path="/card" component={Card} />
                <Route path="/icon" component={Icon} />
                <Route path="/input" component={Input} />
                <Route path="/progress-bar" component={ProgressBar} />
                <Route path="/spinner" component={Spinner} />
            </LightningApplication>
        </Router>
    );
}
