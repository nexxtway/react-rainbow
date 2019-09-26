import { BaseProps } from './../types';

export interface VerticalNavigationProps extends BaseProps {
    selectedItem?: JSX.ElementChildrenAttribute;
    compact?: boolean;
    shaded?: boolean;
    ariaLabel?: string;
    id?: string;
    // onSelect?: ;
}

export default function(props: VerticalNavigationProps): JSX.Element | null;
