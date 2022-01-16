import { MenuItemProps } from '../MenuItem';

export interface DynamicMenuItemProps extends Omit<MenuItemProps, 'disabled'> {
    renderIf?: (rowData: Record<string, any>) => boolean;
    disabled?: (rowData: Record<string, any>) => boolean;
}

export default function(props: DynamicMenuItemProps): JSX.Element | null;
