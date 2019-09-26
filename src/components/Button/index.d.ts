import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface ButtonProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    variant?:
        | 'base'
        | 'neutral'
        | 'brand'
        | 'outline-brand'
        | 'destructive'
        | 'success'
        | 'inverse'
        | 'border-inverse';
    shaded?: boolean;
    title?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    tabIndex?: number | string;
    ariaHaspopup?: boolean;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaPressed?: boolean;
    form?: string;
    id?: string;
    isLoading?: boolean;
    // onClick?: ;
    // onKeyDown?: ;
    // onFocus?: ;
    // onBlur?: ;
}

declare const Button: React.ComponentType<ButtonProps>;
export default Button;
