import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface MarkdownOutputProps extends BaseProps {
    id?: string;
    renderers?: object;
    plugins?: object[];
    parserOptions?: object;
    source: string;
}

export default function(props: MarkdownOutputProps): JSX.Element | null;
