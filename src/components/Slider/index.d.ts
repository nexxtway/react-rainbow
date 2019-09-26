import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface SliderProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    hideLabel?: boolean;
    name?: string;
    value?: string | number;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    error?: string | JSX.ElementChildrenAttribute;
    disabled?: boolean;
    // onChange?: ;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
}

declare const Slider: React.ComponentType<SliderProps>;
export default Slider;
