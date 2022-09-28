export interface DatasetProps {
    type?: 'line';
    values?: number[];
    title?: string;
    backgroundColor?: string[] | string;
    borderColor?: string[] | string;
    stack?: string;
    fill?: boolean;
    [key: string]: unknown;
}

export default function(props: DatasetProps): JSX.Element | null;
