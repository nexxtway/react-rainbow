import { ReactNode } from 'react';
import { BaseProps } from '../types';

interface nodePath {
    nodePath: number[];
}

interface DataItem {
    label?: ReactNode;
    icon?: ReactNode;
    isExpanded?: boolean;
    isChecked?: boolean | 'indeterminate';
    children?: DataItem[];
}

export interface TreeProps extends BaseProps {
    data?: DataItem[];
    onExpandCollapse?: (args: nodePath) => void;
    onSelect?: (args: nodePath) => void;
}

export default function(props: TreeProps): JSX.Element | null;
