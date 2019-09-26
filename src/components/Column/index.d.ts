export interface ColumnProps {
    header?: string | JSX.ElementChildrenAttribute;
    // component?: ;
    field?: string;
    sortable?: boolean;
    width?: number | string;
    defaultWidth?: number | string;
    type?: 'text' | 'action';
}

export default function(props: ColumnProps): JSX.Element | null;
