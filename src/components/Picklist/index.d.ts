import { ReactNode, ComponentType, MouseEvent } from 'react';
import { BaseProps } from '../types';

interface PicklistValue {
    label?: string;
    name?: string;
    icon?: ReactNode;
    value?: any;
}

export interface PicklistProps extends BaseProps {
    label?: ReactNode;
    hideLabel?: boolean;
    children?: ReactNode;
    isLoading?: boolean;
    value?: PicklistValue;
    variant?: 'default' | 'shaded';
    onChange?: (value: PicklistValue) => void;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: null | PicklistValue) => void;
    onBlur?: (event: null | PicklistValue) => void;
    tabIndex?: number | string;
    placeholder?: string;
    name?: string;
    error?: ReactNode;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    id?: string;
}

declare const Picklist: ComponentType<PicklistProps>;
export default Picklist;
