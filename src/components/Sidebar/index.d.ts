import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface SidebarProps extends BaseProps {
    id?: string;
    selectedItem?: string;
    onSelect?: (event: MouseEvent<HTMLElement>, name: string) => void;
    ariaLabel?: string;
    children?: ReactNode;
}

export default function(props: SidebarProps): JSX.Element | null;
