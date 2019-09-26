import { BaseProps } from './../types';

export interface PicklistOptionProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    name: string;
    variant?: 'default' | 'header';
    icon?: JSX.ElementChildrenAttribute;
    iconPosition: 'left' | 'right';
    disabled?: boolean;
    title?: string;
    // value?: ;
}

export default function(props: PicklistOptionProps): JSX.Element | null;
