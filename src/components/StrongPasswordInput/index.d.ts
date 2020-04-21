import { InputProps } from '../Input/index';

export interface StrongPasswordInputProps extends InputProps {
    passwordState?: 'poor' | 'average' | 'strong';
    passwordStateLabel?: string;
}

export default function(props: StrongPasswordInputProps): JSX.Element | null;
