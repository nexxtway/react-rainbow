import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface ApplicationProps extends BaseProps {
    children?: ReactNode;
    locale?: string;
}

export default function(props: ApplicationProps): JSX.Element | null;
