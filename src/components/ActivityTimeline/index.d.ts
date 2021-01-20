import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

type Names = string[] | string;

interface onToggleSectionEventShape {
    activeSectionNames: Names;
    toggledSection: string;
}

export interface ActivityTimelineProps extends BaseProps {
    children?: ReactNode;
    variant?: 'default' | 'accordion';
    multiple?: boolean;
    onToggleSection?: (value: onToggleSectionEventShape) => void;
    activeSectionNames?: Names;
}

export default function(props: ActivityTimelineProps): JSX.Element | null;
