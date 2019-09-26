import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface TabsetProps extends BaseProps {
    activeTabName?: JSX.ElementChildrenAttribute;
    fullWidth?: boolean;
    id?: string;
    // onSelect?: ;
}

declare const Tabset: React.ComponentType<TabsetProps>;
export default Tabset;
