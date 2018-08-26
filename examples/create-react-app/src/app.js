import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LightningApplication from 'react-slds/components/Application';
import Home from './pages/Home';
import ButtonIcon from './pages/ButtonIcon';

export default function App() {
    return (
        <Router>
            <LightningApplication assetsSrc="/assets">
                <Route exact path="/" component={Home} />
                <Route path="/button-icon" component={ButtonIcon} />
            </LightningApplication>
        </Router>
    );
}
