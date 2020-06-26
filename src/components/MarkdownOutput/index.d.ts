import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface MarkdownOutputProps extends BaseProps {
    id?: string;
    renderers?: object;
    // linkTarget?: string;
    // transformLinkUri?: () => void;
    // transformImageUri?: () => void;
    plugins?: object[];
    parserOptions?: object;
}

export default function(props: MarkdownOutputProps): JSX.Element | null;
