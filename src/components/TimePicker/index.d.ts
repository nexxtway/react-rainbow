import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface TimePickerProps extends BaseProps {
    value?: string;
    cancelLabel?: string | JSX.ElementChildrenAttribute;
    okLabel?: string | JSX.ElementChildrenAttribute;
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
    id?: string;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
    // onChange?: ;
}

declare const TimePicker: React.ComponentType<TimePickerProps>;
export default TimePicker;
