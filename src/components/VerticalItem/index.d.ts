import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface VerticalItemProps extends BaseProps {
    label?: ReactNode;
    name?: string;
    icon?: ReactNode;
    href?: string;
    notification?: ReactNode;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export default function(props: VerticalItemProps): JSX.Element | null;
