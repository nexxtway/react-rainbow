import { ReactNode } from 'react';
import { BaseProps } from '../types';

interface nodePath {
    nodePath: number[];
}

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
    onNodeExpand?: (args: nodePath) => void;
    onNodeCheck?: (args: nodePath) => void;
    onNodeSelect?: (args: selectValue) => void;
    selectedNode?: string;
    id?: string;
    ariaLabelledBy?: string;
    ariaLabel?: string;
}

export default function(props: TreeProps): JSX.Element | null;
