import React from 'react';
import { Tabset, Tab } from './../../../../entry';

export default class ScopedTabs extends React.Component {
    render() {
        return (
            <Tabset variant="scoped" initialActiveTabId="Two">
                <Tab label="One" id="One"/>
                <Tab label="Two" id="Two"/>
            </Tabset>
        )
    }
}