import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface CheckboxToggleProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    name?: string;
    value?: boolean;
    disabled?: boolean;
    // onChange?: ;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
    id?: string;
}

declare const CheckboxToggle: React.ComponentType<CheckboxToggleProps>;
export default CheckboxToggle;
