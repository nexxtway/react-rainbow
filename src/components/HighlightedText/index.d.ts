import { ComponentType } from 'react';
import { BaseProps } from '../types';

export interface HighlightedText extends BaseProps {
    HitComponent?: ComponentType;
    TextComponent?: ComponentType;
    part?: object[];
}

export default function(props: HighlightedText): JSX.Element | null;
