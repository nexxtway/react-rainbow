import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface InputProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    value?: string | boolean;
    name?: string;
    type?:
        | 'text'
        | 'password'
        | 'datetime'
        | 'datetime-local'
        | 'date'
        | 'month'
        | 'time'
        | 'week'
        | 'number'
        | 'email'
        | 'url'
        | 'search'
        | 'tel'
        | 'color'
        | 'radio'
        | 'checkbox';
    hideLabel?: boolean;
    placeholder?: string;
    icon?: JSX.ElementChildrenAttribute;
    iconPosition?: 'left' | 'right';
    maxLength?: number;
    minLength?: number;
    bottomHelpText?: string | JSX.ElementChildrenAttribute;
    required?: boolean;
    pattern?: string;
    isCentered?: boolean;
    isBare?: boolean;
    error?: string | JSX.ElementChildrenAttribute;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number | string;
    // onChange?: ;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
    // onKeyDown?: ;
    checked?: boolean;
    id?: string;
    autoComplete?: string;
}

declare const Input: React.ComponentType<InputProps>;
export default Input;
