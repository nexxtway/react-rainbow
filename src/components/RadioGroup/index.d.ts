import { BaseProps } from './../types';

export interface RadioGroupProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    name?: string;
    value?: string;
    variant?: 'default' | 'inverse' | 'brand';
    required?: boolean;
    // onChange?: ;
    // options?: ;
    error?: string | JSX.ElementChildrenAttribute;
    id?: string;
}

declare const RadioGroup: React.ComponentType<RadioGroupProps>;
export default RadioGroup;
