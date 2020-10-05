import { ComponentType } from 'react';
import { BaseProps } from '../types';

interface Part {
    value?: string;
    type?: string;
}

export interface HighlightedText extends BaseProps {
    hitComponent?: ComponentType<{ children?: string }>;
    textComponent?: ComponentType<{ children?: string }>;
    parts?: Part[];
    isInline?: boolean;
}

export default function(props: HighlightedText): JSX.Element | null;
