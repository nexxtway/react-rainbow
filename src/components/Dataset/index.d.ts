export interface DatasetProps {
    type?: 'bar' | 'horizontalBar' | 'line' | 'radar' | 'pie' | 'doughnut' | 'polarArea' | 'bubble';
    values: number;
    title?: string;
    backgroundColor?: string[] | string;
    borderColor?: string[] | string;
    stack?: string;
    fill?: boolean;
}

export default function(props: DatasetProps): JSX.Element | null;
