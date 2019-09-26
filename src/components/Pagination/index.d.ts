import { BaseProps } from './../types';

export interface PaginationProps extends BaseProps {
    pages: number;
    activePage?: number;
    // onChange?: ;
}

export default function(props: PaginationProps): JSX.Element | null;
