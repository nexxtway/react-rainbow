import { MenuItemProps } from '../MenuItem';

export interface Params {
    row?: Record<string, any>;
}

export interface DynamicMenuItemProps extends Omit<MenuItemProps, 'disabled'> {
    renderIf?: (params: Params) => boolean;
    disabled?: (params: Params) => boolean;
}

export default function(props: DynamicMenuItemProps): JSX.Element | null;
