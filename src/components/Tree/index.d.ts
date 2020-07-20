import { ReactNode } from 'react';
import { BaseProps } from '../types';

interface selectValue {
    nodePath: number[];
    name: string;
}

interface DataItem {
    label?: ReactNode;
    icon?: ReactNode;
    isExpanded?: boolean;
    isLoading?: boolean;
    isChecked?: boolean | 'indeterminate';
    children?: DataItem[];
}

export interface TreeProps extends BaseProps {
    data?: DataItem[];
    onNodeExpand?: (args: selectValue) => void;
    onNodeCheck?: (args: selectValue) => void;
    onNodeSelect?: (args: selectValue) => void;
    selectedNode?: string;
    id?: string;
    ariaLabelledBy?: string;
    ariaLabel?: string;
}

export default function(props: TreeProps): JSX.Element | null;
