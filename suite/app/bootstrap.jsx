import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import DisplayComponentDemos from './DisplayComponentDemos.jsx';
import { Config } from './../../entry';

Config.set('pathToAssets', 'assets');
render(
    <Router history={ hashHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Dashboard }/>
            <Route path="component/:name" component={ DisplayComponentDemos }/>
        </Route>
    </Router>, document.getElementById('app'));