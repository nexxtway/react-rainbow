import { BaseProps } from './../types';

export interface SidebarProps extends BaseProps {
    id?: string;
    selectedItem?: JSX.ElementChildrenAttribute;
    ariaLabel?: string;
    // onSelect?: ;
}

export default function(props: SidebarProps): JSX.Element | null;
