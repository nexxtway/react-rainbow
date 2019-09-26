import { BaseProps } from './../types';

export interface ProgressStepProps extends BaseProps {
    name?: string;
    label?: JSX.ElementChildrenAttribute;
    hasError?: boolean;
}

export default function(props: ProgressStepProps): JSX.Element | null;
