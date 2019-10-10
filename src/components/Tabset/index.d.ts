import { ReactNode, ComponentType, MouseEvent } from 'react';
import { BaseProps } from '../types';

export interface TabsetProps extends BaseProps {
    activeTabName?: string;
    onSelect?: (event: MouseEvent<HTMLElement>, name: string) => void;
    fullWidth?: boolean;
    id?: string;
    children?: ReactNode;
}

declare const Tabset: ComponentType<TabsetProps>;
export default Tabset;
