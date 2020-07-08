import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface MarkdownOutputProps extends BaseProps {
    id?: string;
    value?: string;
}

export default function(props: MarkdownOutputProps): JSX.Element | null;
