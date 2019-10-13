import { ReactNode } from 'react';
import { BaseProps } from '../types';

export interface ActivityTimelineProps extends BaseProps {
    children?: ReactNode;
}

export default function(props: ActivityTimelineProps): JSX.Element | null;
