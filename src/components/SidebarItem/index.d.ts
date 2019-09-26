import { BaseProps } from './../types';

export interface SidebarItemProps extends BaseProps {
    name: string;
    label?: string | JSX.ElementChildrenAttribute;
    icon: JSX.ElementChildrenAttribute;
    href?: string;
    // onClick?: ;
}

export default function(props: SidebarItemProps): JSX.Element | null;
