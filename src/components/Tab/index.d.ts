import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface TabProps extends BaseProps {
    label?: ReactNode;
    name?: string;
    title?: string;
    disabled?: boolean;
    id?: string;
    ariaControls?: string;
}

export default function(props: TabProps): JSX.Element | null;
