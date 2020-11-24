import { BaseProps } from '../types';

export interface PathStepProps extends BaseProps {
    label?: string;
    name?: string | number;
    hasError?: boolean;
}

export default function(props: PathStepProps): JSX.Element | null;
