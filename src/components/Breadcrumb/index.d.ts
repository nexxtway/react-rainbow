import { ReactNode, MouseEvent, MouseEventHandler } from 'react';
import { BaseProps } from './../types';

export interface BreadcrumbProps extends BaseProps {
    label: ReactNode;
    href?: string;
    onClick?: (event: EventHandler<any>) => void;
    disabled?: boolean;
}

export default function(props: BreadcrumbProps): JSX.Element | null;
