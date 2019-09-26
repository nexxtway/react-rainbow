import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface LookupProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    hideLabel?: boolean;
    name?: string;
    debounce?: boolean;
    isLoading?: boolean;
    placeholder?: string;
    required?: boolean;
    error?: string | JSX.ElementChildrenAttribute;
    disabled?: boolean;
    readOnly?: boolean;
    icon?: JSX.ElementChildrenAttribute;
    size?: 'small' | 'medium' | 'large';
    tabIndex?: number | string;
    // options?: ;
    // onSearch?: ;
    // onChange?: ;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
    // value?: ;
    id?: string;
    preferredSelectedOption?: number;
}

declare const Lookup: React.ComponentType<LookupProps>;
export default Lookup;
