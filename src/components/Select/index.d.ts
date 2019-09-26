import { BaseProps } from './../types';

export interface SelectProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    name?: string;
    value?: string | number;
    // onChange?: ;
    // onClick?: ;
    // onFocus?: ;
    // onBlur?: ;
    error?: string | JSX.ElementChildrenAttribute;
    required?: boolean;
    disabled?: boolean;
    // options?: ;
    // id?: ;
    hideLabel?: boolean;
}

declare const Select: React.ComponentType<SelectProps>;
export default Select;
