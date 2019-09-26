import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface ButtonIconProps extends BaseProps {
    assistiveText?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaHaspopup?: boolean;
    ariaPressed?: boolean;
    disabled?: boolean;
    form?: string;
    icon: JSX.ElementChildrenAttribute;
    id?: string;
    // onBlur?: ;
    // onClick?: ;
    // onFocus?: ;
    // onKeyDown?: ;
    shaded?: boolean;
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    tabIndex?: number | string;
    title?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?:
        | 'base'
        | 'brand'
        | 'success'
        | 'border'
        | 'border-filled'
        | 'border-inverse'
        | 'inverse';
}

declare const ButtonIcon: React.ComponentType<ButtonIconProps>;
export default ButtonIcon;
