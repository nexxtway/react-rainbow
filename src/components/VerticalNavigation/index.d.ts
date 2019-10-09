import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface VerticalNavigationProps extends BaseProps {
    selectedItem?: string;
    onSelect?: (event: MouseEvent<HTMLElement>, name: string) => void;
    compact?: boolean;
    shaded?: boolean;
    ariaLabel?: string;
    children?: ReactNode;
    id?: string;
}

export default function(props: VerticalNavigationProps): JSX.Element | null;
