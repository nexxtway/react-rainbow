import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface TextareaProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    hideLabel?: boolean;
    name?: string;
    value?: string;
    placeholder?: string;
    maxLength?: number;
    minLength?: number;
    grow?: boolean;
    bottomHelpText?: string | JSX.ElementChildrenAttribute;
    required?: boolean;
    error?: string | JSX.ElementChildrenAttribute;
    disabled?: boolean;
    rows?: number;
    readOnly?: boolean;
    id?: string;
    // onChange?: ;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
    // onPaste?: ;
}

declare const Textarea: React.ComponentType<TextareaProps>;
export default Textarea;
