import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface VerticalSectionProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
}

declare const VerticalSection: React.ComponentType<VerticalSectionProps>;
export default VerticalSection;
