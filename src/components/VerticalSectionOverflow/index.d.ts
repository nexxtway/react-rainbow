import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface VerticalSectionOverflowProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    description?: string | JSX.ElementChildrenAttribute;
    expanded?: boolean;
    assistiveText?: string;
    // onToggleSection?: ;
}

declare const VerticalSectionOverflow: React.ComponentType<VerticalSectionOverflowProps>;
export default VerticalSectionOverflow;
