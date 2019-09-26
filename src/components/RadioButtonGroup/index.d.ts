import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface RadioButtonGroupProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    name?: string;
    value?: string;
    variant?: 'default' | 'inverse' | 'brand';
    required?: boolean;
    // options?: ;
    // onChange?: ;
    error?: string | JSX.ElementChildrenAttribute;
    id?: string;
}

declare const RadioButtonGroup: React.ComponentType<RadioButtonGroupProps>;
export default RadioButtonGroup;
