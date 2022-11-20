import { ReactNode, ComponentType, MouseEvent } from 'react';
import { BaseProps, LabelAlignment } from '../types';

interface PicklistValue {
    label?: string;
    name?: string | number;
    icon?: ReactNode;
    value?: any;
}

export interface PicklistProps extends BaseProps {
    label?: ReactNode;
    labelAlignment?: LabelAlignment;
    hideLabel?: boolean;
    children?: ReactNode;
    isLoading?: boolean;
    enableSearch?: boolean;
    onSearch?: (query: string) => void;
    value?: PicklistValue;
    variant?: 'default' | 'shaded' | 'bare' | 'inverse';
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
    debounce?: boolean;
    emptyComponent?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}

declare const Picklist: ComponentType<PicklistProps>;
export default Picklist;
