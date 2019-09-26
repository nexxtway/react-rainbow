import { BaseProps } from './../types';

export interface MenuItemProps extends BaseProps {
    label: string | JSX.ElementChildrenAttribute;
    variant?: 'default' | 'header';
    icon?: JSX.ElementChildrenAttribute;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
    title?: string;
    // onClick?: ;
}

export default function(props: MenuItemProps): JSX.Element | null;
