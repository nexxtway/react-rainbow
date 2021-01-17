import { ReactNode, MouseEvent } from 'react';
import { BaseProps } from '../types';

type Names = string[] | string;

export interface ActivityTimelineProps extends BaseProps {
    children?: ReactNode;
    multiple?: boolean;
    onToggleSection?: (event: MouseEvent<HTMLElement>, name: Names) => void;
    activeSectionNames?: Names;
}

export default function(props: ActivityTimelineProps): JSX.Element | null;
