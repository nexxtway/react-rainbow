import { ReactNode, ComponentType, MouseEvent } from 'react';
import { BaseProps, LookupValue } from '../types';

export interface LookupProps extends BaseProps {
    label?: ReactNode;
    hideLabel?: boolean;
    value?: LookupValue;
    options?: LookupValue[];
    name?: string;
    debounce?: boolean;
    isLoading?: boolean;
    placeholder?: string;
    required?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    icon?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    tabIndex?: number | string;
    onSearch?: (value: string) => void;
    onChange?: (value: null | LookupValue) => void;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onFocus?: (event: null | LookupValue) => void;
    onBlur?: (event: null | LookupValue) => void;
    id?: string;
    preferredSelectedOption?: number;
}

declare const Lookup: ComponentType<LookupProps>;
export default Lookup;
