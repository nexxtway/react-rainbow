import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface HelpTextProps extends BaseProps {
    title?: ReactNode;
    text: ReactNode;
    icon?: ReactNode;
    variant?: 'question' | 'info' | 'error' | 'warning';
    tabIndex?: number | string;
}

export default function(props: HelpTextProps): JSX.Element | null;
