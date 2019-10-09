import { BaseProps } from '../types';

export interface MenuDividerProps extends BaseProps {
    variant?: 'default' | 'space';
}

export default function(props: MenuDividerProps): JSX.Element | null;
