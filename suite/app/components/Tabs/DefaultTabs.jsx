import React from 'react';
import { Tabset, Tab } from './../../../../entry';

export default class DefaultTabs extends React.Component {
    render() {
        return (
            <Tabset initialActiveTabId="Two">
                <Tab label="One" id="One"/>
                <Tab label="Two" id="Two"/>
            </Tabset>
        )
    }
}