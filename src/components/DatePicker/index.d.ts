import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface DatePickerProps extends BaseProps {
    // value?: ;
    // maxDate?: ;
    // minDate?: ;
    formatStyle?: 'small' | 'medium' | 'large';
    // onChange?: ;
    placeholder?: string;
    label: string | JSX.ElementChildrenAttribute;
    hideLabel?: boolean;
    required?: boolean;
    name?: string;
    bottomHelpText?: string | JSX.ElementChildrenAttribute;
    isCentered?: boolean;
    error?: string | JSX.ElementChildrenAttribute;
    readOnly?: boolean;
    disabled?: boolean;
    tabIndex?: number | string;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
    id?: string;
}

declare const DatePicker: React.ComponentType<DatePickerProps>;
export default DatePicker;
