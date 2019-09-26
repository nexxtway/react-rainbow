import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface PicklistProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    hideLabel?: boolean;
    isLoading?: boolean;
    title?: string;
    assistiveText?: string;
    tabIndex?: number | string;
    placeholder?: string;
    name?: string;
    error?: string | JSX.ElementChildrenAttribute;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    id?: string;
    // value?: ;
    // onChange?: ;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
}

declare const Picklist: React.ComponentType<PicklistProps>;
export default Picklist;
