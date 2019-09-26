import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface VisualPickerProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    name?: string;
    value?: [] | string;
    id?: string;
    required?: boolean;
    error?: string | JSX.ElementChildrenAttribute;
    multiple?: boolean;
    // onChange?: ;
}

declare const VisualPicker: React.ComponentType<VisualPickerProps>;
export default VisualPicker;
