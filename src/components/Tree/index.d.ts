import { ReactNode } from 'react';
import { BaseProps } from '../types';

interface ChildPath {
    childPath: number[];
}

interface DataItem {
    label?: ReactNode;
    icon?: ReactNode;
    isExpanded?: boolean;
    isChecked?: boolean;
    children?: DataItem[];
}

export interface TreeProps extends BaseProps {
    data?: DataItem[];
    onExpandCollapse?: (args: ChildPath) => void;
    onSelect?: (args: ChildPath) => void;
}

export default function(props: TreeProps): JSX.Element | null;
