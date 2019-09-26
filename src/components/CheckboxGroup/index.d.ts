import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface CheckboxGroupProps extends BaseProps {
    error?: string | JSX.ElementChildrenAttribute;
    id?: string;
    label?: string | JSX.ElementChildrenAttribute;
    name?: string;
    // options?: ;
    // onChange?: ;
    required?: boolean;
    value?: string[] | string;
}

declare const CheckboxGroup: React.ComponentType<CheckboxGroupProps>;
export default CheckboxGroup;
